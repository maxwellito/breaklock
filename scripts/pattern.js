/**
 * Class Pattern
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
    this.count = 0
    while (!this.isComplete()) {
      this.addPoint(Math.floor(Math.random() * 9))

    }
  }

  /**
   * Add point to the current pattern
   * @param {int} dotIndex Dot index to add
   * @return boolean True if successfully added
   */
  addPoint (dotIndex) {

    console.log(dotIndex, this.suite)
    this.count++
    if (this.count > 20) {
      debugger
    }


    if (this.isComplete() || ~this.suite.indexOf(dotIndex))
      return false;

    // Test for potential median dot
    let lastDot = this.suite[this.suite.length - 1],
        medianDot = (lastDot + dotIndex) / 2

    if (lastDot != undefined &&
        medianDot >> 0 === medianDot &&
        (lastDot%3) - (medianDot%3) === (medianDot%3) - (dotIndex%3) &&
        Math.floor(lastDot/3) - Math.floor(medianDot/3) === Math.floor(medianDot/3) - Math.floor(dotIndex/3)) {
      this.addPoint(medianDot)
      return !!(!this.isComplete() && this.suite.push(dotIndex))
    }

    this.suite.push(dotIndex)
    return true
  }

  /**
   * Checks if the instance suite is complete
   * @return {Boolean}
   */
  isComplete () {
    return this.suite.length >= this.dotLength
  }




  generateSVG () {

    let svgDom = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svgDom.setAttribute('viewBox', '0 0 100 100')


    // Add pattern
    let lineGroup = document.createElementNS('http://www.w3.org/2000/svg','g')
    lineGroup.setAttribute('stroke-width', '14')
    lineGroup.setAttribute('stroke', '#fff')
    lineGroup.setAttribute('stroke-linecap', 'round')
    svgDom.appendChild(lineGroup)

    for (let i = 1; i < this.suite.length; i++) {
      let line = document.createElementNS('http://www.w3.org/2000/svg','line')
      line.setAttribute('x1', (this.suite[i-1] % 3) * 40 + 10)
      line.setAttribute('y1', Math.floor(this.suite[i-1] / 3) * 40 + 10)
      line.setAttribute('x2', (this.suite[i] % 3) * 40 + 10)
      line.setAttribute('y2', Math.floor(this.suite[i] / 3) * 40 + 10)
      lineGroup.appendChild(line)
    }

    // Add dots
    let dotGroup = document.createElementNS('http://www.w3.org/2000/svg','g')
    dotGroup.setAttribute('fill', '#fff')
    svgDom.appendChild(dotGroup)

    for (let i = 0; i < 9; i++) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg','circle')
      circle.setAttribute('cx', (i % 3) * 40 + 10)
      circle.setAttribute('cy', Math.floor(i / 3) * 40 + 10)

      if (i === this.suite[0]) {
        circle.setAttribute('fill', '#1af')
        circle.setAttribute('r', 5)
      }
      else
        circle.setAttribute('r', 3)
      dotGroup.appendChild(circle)
    }



    return svgDom

  }
}
