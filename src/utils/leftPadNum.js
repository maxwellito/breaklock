/**
 * Dummy leftpad for numbers
 * @param  {number} num Number to left pad
 * @param  {number} len Length of the final string
 * @return {string}     Leftpadded string
 */
var leftPadNum = (num, len) => {

  let str = num + ''
  for (let i = (len - str.length); i > 0; i--) {
    str = '0' + str
  }
  return str
}

export default leftPadNum
