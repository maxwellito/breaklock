import dom from './dom'

/**
 * Class to generate SVG from Pattern objects
 */
class PatternSVG {

  /**
   * Setup the SVG base node
   *
   */
  constructor () {
    this.el = dom.create('svg', {'viewBox': '0 0 ' + this.SVG_WIDTH + ' ' + this.SVG_WIDTH})
  }

  /**
   * Add an invisible rectangle as background.
   * This is only to help Safari to catch touch events
   * on the SVG lock.
   */
  addBackgroundLayer () {
    let rect = dom.create('rect', {
      'fill': '#fff',
      'fill-opacity': '0',
      'width': this.SVG_WIDTH,
      'height': this.SVG_WIDTH
    })
    this.el.appendChild(rect)
    return rect
  }

  /**
   * Add pattern to the instance
   * @param {Pattern}      pattern   Pattern instance to get the points from
   * @param {int}          size      Thickness of the line
   * @param {string|array} color     List of colors to use for the pattern
   * @return PatternSVG
   */
  addPattern (pattern, size = 14, color = '#fff') {
    let lines = []
    color = color instanceof Array ? color : [color]

    // Add all lines
    for (let i = 1; i < pattern.suite.length; i++) {
      lines.push(dom.create('line', {
        'x1':           (pattern.suite[i-1] % 3) * this.GRID_GUTTER + this.SVG_MARGIN,
        'y1': Math.floor(pattern.suite[i-1] / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
        'x2':             (pattern.suite[i] % 3) * this.GRID_GUTTER + this.SVG_MARGIN,
        'y2':   Math.floor(pattern.suite[i] / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
        'stroke': color[Math.min(color.length, i) - 1]
      }))
    }

    // Add the dot reprenting the final dot
    let lastDotIndex = pattern.suite[pattern.suite.length - 1]
    lines.push(dom.create('circle', {
      cx:    (lastDotIndex % 3) * this.GRID_GUTTER + this.SVG_MARGIN,
      cy:    Math.floor(lastDotIndex / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
      fill:  color[0],
      r:     size / 4
    }))

    // Bundle everything in a group
    return this.addGroup({
      'stroke-width': size,
      'stroke-linecap': 'round'
    }, lines)
  }

  /**
   * Add dots to the instance
   * @param {int}    size  Thickness of the line
   * @param {object} attr  List of attributes to set to the group
   * @return PatternSVG
   */
  addDots (size = 3, attr = {}) {
    let dots = []
    attr.fill = attr.fill || '#fff'

    for (let i = 0; i < 9; i++) {
      dots.push(dom.create('circle', {
        cx:    (i % 3) * this.GRID_GUTTER + this.SVG_MARGIN,
        cy:    Math.floor(i / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
        rel:   i,
        r:     size
      }))
    }
    return this.addGroup(attr, dots)
  }

  /**
   * Add group to the instance
   * @param {object} attr    List of attributes to set to the group
   * @param {*}      content Items as content
   * @return SVGDOMElement
   */
  addGroup (attr, content) {
    let group = dom.create('g', attr, content)
    this.el.appendChild(group)
    return group
  }

  /**
   * Add combinaison results
   * @param {int} goodDots      Amount of good dots
   * @param {int} badPlacedDots Amount of badly placed dots
   * @param {int} wrongDots     Amount of wrong dots
   */
  addCombinaison (goodDots, badPlacedDots, wrongDots) {
    let totalDots = goodDots + badPlacedDots + wrongDots,
        dot = Math.min(Math.floor(this.SVG_WIDTH / totalDots), this.SVG_COMB_EXP),
        dotWidth = Math.floor(dot * .75),
        dotGap = Math.floor(dot * .25),
        xGap = dotWidth + dotGap,
        xStart = Math.floor((this.SVG_WIDTH - (totalDots - 1) * xGap) / 2),
        yStart = this.SVG_WIDTH + Math.floor(this.SVG_COMB_EXP / 2)


    this.el.setAttribute('viewBox', '0 0 ' + this.SVG_WIDTH + ' ' + (this.SVG_WIDTH + this.SVG_COMB_EXP))
    let dots = []

    for (let i = 0; i < totalDots; i++) {
      dots.push(dom.create('circle', {
        'cx': xStart + i * xGap,
        'cy': yStart,
        'r': (dotWidth - this.DOT_BORDER) / 2,
        'stroke-width': this.DOT_BORDER,
        'fill': i < goodDots ? '#fff' : '#000',
        'stroke': i < (goodDots + badPlacedDots) ? '#fff' : '#000',
        'fill-opacity': i < goodDots ? '1' : '.25',
        'stroke-opacity': i < (goodDots + badPlacedDots) ? '1' : '.25'
      }))
    }
    return this.addGroup({}, dots)
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

export default PatternSVG
