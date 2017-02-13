/**
 * Dummy leftpad for numbers
 * @param  {number} num Number to left pad
 * @param  {number} len Length of the final string
 * @return {string}     Leftpadded string
 */
var leftPadNum = (num, len) => {
  let str = Math.abs(num) + '',
      isNegative = num < 0
  for (let i = (len - str.length); i > 0; i--) {
    str = '0' + str
  }
  return (isNegative ? '-' : '') + str
}

export default leftPadNum
