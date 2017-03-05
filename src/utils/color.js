/**
 * Set of tools to manipulate colors
 */

var color = {

  /**
   * Create gradients of grey
   * Specify the color to start and end with plus
   * the amount of intermediate steps.
   * The method will return an array of string
   * format hex string.
   *
   * Example:
   * greydient('99', 'FF', 2)
   * > ['#999999', '#bbbbbb', '#dddddd', '#ffffff']
   * @param  {Number|String} colorStart Start gradient color (: '99' or 153)
   * @param  {Number|String} colorEnd   End gradient color (: 'FF' or 255)
   * @param  {Number}        steps      Amount of intermediate colors
   * @return {Array}                    Color list
   */
  greydient: (colorStart, colorEnd, steps = 0) => {
    // Convert to number if hex string
    colorStart = typeof colorStart === 'string' ? parseInt(colorStart, 16) : colorStart
    colorEnd   = typeof colorEnd === 'string'   ? parseInt(colorEnd, 16)   : colorEnd

    // Linit to the spectrum
    colorStart = Math.min(255, Math.max(0, colorStart))
    colorEnd   = Math.min(255, Math.max(0, colorEnd))

    steps++
    let output = [],
        gap    = (colorEnd - colorStart) / steps

    for (let i = 0; i <= steps; i++) {
      let grey = Math.round(colorStart + i * gap),
          greyHex = grey.toString(16)
      output.push('#' + greyHex + greyHex + greyHex)
    }
    return output
  }
}

export default color
