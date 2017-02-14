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

  /**
   * Set up a pattern with only
   * the length of dots to link
   * @param  {Number} dotLength Length of the pattern
   */
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
   * Compare a pattern with the current instance.
   * The output will be an array of three values:
   * [0]: Number of dots in the right place in the pattern
   * [1]: Number of correct dots badly placed in the pattern
   * [2]: Number of wrong dots
   * @param  {Pattern} pattern Pattern to compare
   * @return {Array}
   */
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

export default Pattern
