class PatternSVG {
  constructor () {
    this.el = document.createElementNS(this.SVG_NAMESPACE, 'svg')
    this.el.setAttribute('viewBox', '0 0 ' + this.SVG_WIDTH + ' ' + this.SVG_WIDTH)
  }

  /**
   * Add pattern to the instance
   * @param {Pattern}      pattern   Pattern instance to get the points from
   * @param {int}          size      Thickness of the line
   * @param {string|array} color     List of colors to use for the pattern
   * @return PatternSVG
   */
  addPattern (pattern, size = 14, color = '#fff') {
    let lineGroup = document.createElementNS(this.SVG_NAMESPACE, 'g')
    color = color instanceof Array ? color : [color]
    lineGroup.setAttribute('stroke-width', size)
    lineGroup.setAttribute('stroke-linecap', 'round')
    this.el.appendChild(lineGroup)

    for (let i = 1; i < pattern.suite.length; i++) {
      let line = document.createElementNS(this.SVG_NAMESPACE, 'line')
      line.setAttribute('x1', (pattern.suite[i-1] % 3) * this.GRID_GUTTER + this.SVG_MARGIN)
      line.setAttribute('y1', Math.floor(pattern.suite[i-1] / 3) * this.GRID_GUTTER + this.SVG_MARGIN)
      line.setAttribute('x2', (pattern.suite[i] % 3) * this.GRID_GUTTER + this.SVG_MARGIN)
      line.setAttribute('y2', Math.floor(pattern.suite[i] / 3) * this.GRID_GUTTER + this.SVG_MARGIN)
      line.setAttribute('stroke', color[Math.min(color.length, i) - 1])
      lineGroup.appendChild(line)
    }
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

    for (let i = 0; i < 9; i++) {
      let circle = document.createElementNS(this.SVG_NAMESPACE, 'circle')
      circle.setAttribute('cx', (i % 3) * this.GRID_GUTTER + this.SVG_MARGIN)
      circle.setAttribute('cy', Math.floor(i / 3) * this.GRID_GUTTER + this.SVG_MARGIN)
      circle.setAttribute('rel', i)
      circle.setAttribute('r', size)
      dotGroup.appendChild(circle)
    }
    return dotGroup
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
    let dotGroup = this.addGroup({})

    for (let i = 0; i < totalDots; i++) {
      let circle = document.createElementNS(this.SVG_NAMESPACE, 'circle')
      circle.setAttribute('cx', xStart + i * xGap)
      circle.setAttribute('cy', yStart)
      circle.setAttribute('r', (dotWidth - this.DOT_BORDER) / 2)
      circle.setAttribute('stroke-width', this.DOT_BORDER)
      circle.setAttribute('fill', i < goodDots ? '#fff' : '#000')
      circle.setAttribute('stroke', i < (goodDots + badPlacedDots) ? '#fff' : '#000')
      circle.setAttribute('fill-opacity', i < goodDots ? '1' : '.25')
      circle.setAttribute('stroke-opacity', i < (goodDots + badPlacedDots) ? '1' : '.25')
      dotGroup.appendChild(circle)
    }
    return dotGroup
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
