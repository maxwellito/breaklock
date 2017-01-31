/**
 * Pattern class
 * a pattern is a object representation of a combinaison.
 * The amount of dot is specified in the constructor, it's
 * not linked to the class itself.
 *
 * For reference:
 *  0 1 2
 *  3 4 5
 *  6 7 8
 *
 */
class Pattern {
  constructor (dotLength) {
    this.dotLength = dotLength
    this.suite = []
  }

  /**
   * Fill the current instance with random values
   */
  fillRandomly () {
    while (!this.isComplete()) {
      this.addDot(Math.floor(Math.random() * 9))

    }
  }

  /**
   * Add point to the current pattern
   * @param {int} dotIndex Dot index to add
   * @return boolean True if successfully added
   */
  addDot (dotIndex) {
    // Test if the dot can be added
    if (this.isComplete() || ~this.suite.indexOf(dotIndex))
      return [];

    // Test for potential median dot
    let lastDot = this.suite[this.suite.length - 1],
        medianDot = (lastDot + dotIndex) / 2

    if (lastDot != undefined &&
        medianDot >> 0 === medianDot &&
        (lastDot%3) - (medianDot%3) === (medianDot%3) - (dotIndex%3) &&
        Math.floor(lastDot/3) - Math.floor(medianDot/3) === Math.floor(medianDot/3) - Math.floor(dotIndex/3)) {
      let addedPoints = this.addDot(medianDot)
      if (!this.isComplete()) {
        this.suite.push(dotIndex)
        addedPoints.push(dotIndex)
      }
      return addedPoints
    }

    this.suite.push(dotIndex)
    return [dotIndex]
  }

  /**
   * Checks if the instance suite is complete
   * @return {Boolean}
   */
  isComplete () {
    return this.suite.length >= this.dotLength
  }

  /**
   * Checks if a dot is already in the pattern
   * @param  {int} dotIndex Index to check
   * @return {boolean}
   */
  gotDot (dotIndex) {
    return ~this.suite.indexOf(dotIndex)
  }

  /**
   * Reset the pattern by removing all the dots
   */
  reset () {
    this.suite = []
  }

  /**
   * Generate the standard thumbnail for a pattern
   * @return {SVGDOMelement}
   */
  generateSVG () {
    let svgDom = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svgDom.setAttribute('viewBox', '0 0 ' + this.SVG_WIDTH + ' ' + this.SVG_WIDTH)

    // Add pattern
    let lineGroup = document.createElementNS('http://www.w3.org/2000/svg','g')
    lineGroup.setAttribute('stroke-width', '14')
    lineGroup.setAttribute('stroke', '#fff')
    lineGroup.setAttribute('stroke-linecap', 'round')
    svgDom.appendChild(lineGroup)

    for (let i = 1; i < this.suite.length; i++) {
      let line = document.createElementNS('http://www.w3.org/2000/svg','line')
      line.setAttribute('x1', (this.suite[i-1] % 3) * this.DOT_GAP + this.SVG_MARGIN)
      line.setAttribute('y1', Math.floor(this.suite[i-1] / 3) * this.DOT_GAP + this.SVG_MARGIN)
      line.setAttribute('x2', (this.suite[i] % 3) * this.DOT_GAP + this.SVG_MARGIN)
      line.setAttribute('y2', Math.floor(this.suite[i] / 3) * this.DOT_GAP + this.SVG_MARGIN)
      lineGroup.appendChild(line)
    }

    // Add dots
    let dotGroup = document.createElementNS('http://www.w3.org/2000/svg','g')
    dotGroup.setAttribute('fill', '#fff')
    svgDom.appendChild(dotGroup)

    for (let i = 0; i < 9; i++) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg','circle')
      circle.setAttribute('cx', (i % 3) * this.DOT_GAP + this.SVG_MARGIN)
      circle.setAttribute('cy', Math.floor(i / 3) * this.DOT_GAP + this.SVG_MARGIN)

      if (i === this.suite[0]) {
        circle.setAttribute('fill', '#1af')
        circle.setAttribute('r', 4)
      }
      else
        circle.setAttribute('r', 3)
      dotGroup.appendChild(circle)
    }
    return svgDom
  }
}

Pattern.prototype.SVG_WIDTH  = 100
Pattern.prototype.DOT_GAP    = 35
Pattern.prototype.SVG_MARGIN = 15
Pattern.prototype.DOT_MAGNET = 5
