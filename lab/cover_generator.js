/**
 * Dirty code to inject into a page to generate
 * the cover for the App in SVG
 */


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

  compare (pattern) {
    var goodPos = 0,
        wrongPos = 0
    for (let i = 0; i < this.dotLength; i++) {
      if (this.suite[i] === pattern.suite[i])
        goodPos++
      for (let j = 0; j < this.dotLength; j++) {
        if (this.suite[j] === pattern.suite[i])
          wrongPos++
      }
    }
    return [goodPos, wrongPos - goodPos, this.dotLength - wrongPos]
  }

  /**
   * Reset the pattern by removing all the dots
   */
  reset () {
    this.suite = []
  }
}













class PatternSVG {
  constructor () {
    this.el = document.createElementNS(this.SVG_NAMESPACE, 'svg')
    this.el.setAttribute('viewBox', '0 0 ' + (this.GRID_GUTTER * 3 * width) + ' ' + (this.GRID_GUTTER * 3 * height))
  }

  /**
   * Add pattern to the instance
   * @param {Pattern}      pattern   Pattern instance to get the points from
   * @param {int}          size      Thickness of the line
   * @param {string|array} color     List of colors to use for the pattern
   * @return PatternSVG
   */
  addPattern (pattern, size = 14, color = '#fff', x, y) {
    let lineGroup = document.createElementNS(this.SVG_NAMESPACE, 'g')
    color = color instanceof Array ? color : [color]
    lineGroup.setAttribute('stroke-width', size)
    lineGroup.setAttribute('stroke-linecap', 'round')
    this.el.appendChild(lineGroup)

    for (let i = 1; i < pattern.suite.length; i++) {
      let line = document.createElementNS(this.SVG_NAMESPACE, 'line')
      line.setAttribute('x1', (x * 3 * this.GRID_GUTTER) + (pattern.suite[i-1] % 3) * this.GRID_GUTTER)
      line.setAttribute('y1', (y * 3 * this.GRID_GUTTER) + Math.floor(pattern.suite[i-1] / 3) * this.GRID_GUTTER)
      line.setAttribute('x2', (x * 3 * this.GRID_GUTTER) + (pattern.suite[i] % 3) * this.GRID_GUTTER)
      line.setAttribute('y2', (y * 3 * this.GRID_GUTTER) + Math.floor(pattern.suite[i] / 3) * this.GRID_GUTTER)
      line.setAttribute('stroke', color[Math.min(color.length, i) - 1])
      lineGroup.appendChild(line)
    }

    // Add the dot reprenting the final dot
    let lastDotIndex = pattern.suite[pattern.suite.length - 1]
    let lastDot = document.createElementNS(this.SVG_NAMESPACE, 'circle')
    lastDot.setAttribute('cx', (x * 3 * this.GRID_GUTTER) + (lastDotIndex % 3) * this.GRID_GUTTER)
    lastDot.setAttribute('cy', (y * 3 * this.GRID_GUTTER) + Math.floor(lastDotIndex / 3) * this.GRID_GUTTER)
    lastDot.setAttribute('fill', color[0])
    lastDot.setAttribute('r', size / 4)
    lineGroup.appendChild(lastDot)

    return lineGroup
  }

  /**
   * Add dots to the instance
   * @param {int}    size  Thickness of the line
   * @param {object} attr  List of attributes to set to the group
   * @return PatternSVG
   */
  addDots (size = 3, attr = {}) {
    attr.fill = attr.fill || '#fff'
    let dotGroup = this.addGroup(attr)

    for (let x = 0; x < 3 * width; x++) {
      for (let y = 0; y < 3 * height; y++) {
        let circle = document.createElementNS(this.SVG_NAMESPACE, 'circle')
        circle.setAttribute('cx', x * this.GRID_GUTTER)
        circle.setAttribute('cy', y * this.GRID_GUTTER)
        circle.setAttribute('r', size)
        dotGroup.appendChild(circle)
      }
    }
    return dotGroup
  }


  /**
   * Add the darkbackground
   * @return PatternSVG
   */
  addBackground () {
    let rect = document.createElementNS(this.SVG_NAMESPACE, 'rect')
    rect.setAttribute('width', width * 3 * this.GRID_GUTTER)
    rect.setAttribute('height', height * 3 * this.GRID_GUTTER)
    rect.setAttribute('fill', '#14171b')
    this.el.appendChild(rect)
    return rect
  }

  /**
   * Add group to the instance
   * @param {object} attr List of attributes to set to the group
   * @return PatternSVG
   */
  addGroup (attr) {
    let group = document.createElementNS(this.SVG_NAMESPACE, 'g')
    for (var key in attr) {
      group.setAttribute(key, attr[key])
    }
    this.el.appendChild(group)
    return group
  }

  /**
   * Get the SVG
   * @return SVGDOMElement
   */
  getSVG () {
    return this.el
  }
}

PatternSVG.prototype.SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
PatternSVG.prototype.SVG_WIDTH     = 100
PatternSVG.prototype.SVG_COMB_EXP  = 20
PatternSVG.prototype.SVG_MARGIN    = 15
PatternSVG.prototype.GRID_GUTTER   = 35
PatternSVG.prototype.DOT_BORDER    = 2
PatternSVG.prototype.DOT_MAGNET    = 6




var width = 12
var height = 18

var mySVG = new PatternSVG()
mySVG.addBackground()
mySVG.addDots(2)


for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    let pat = new Pattern(4)
    pat.fillRandomly()
    mySVG.addPattern(pat, 14, ['#999','#ccc','#fff'], x, y) //# TO_DO: Need consts
  }
}

document.body.appendChild(mySVG.el)
