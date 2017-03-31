/**
 * AirportText
 *
 * Made to display text with transition
 * With an effect of airport display
 */

var animStack = [],
		ratioFrameRate = 3

/**
 * Set up text animation on a dom element
 * @param  {DOMElement} element Element to animate
 * @param  {String}     text    Text to display in the element
 */
function airportText (element, text) {
	let existingAnim = popAnim(element)
	if (existingAnim)
		cancelFakeNextFrame(existingAnim.nextFrame)

	var newAnim = {
		el:             element,
		counter:        text.length * ratioFrameRate,
		originalLength: text.length,
  	originalText:   text,
  	nextFrame:      null
	}
	updateDisplay(newAnim)

	animStack.push(newAnim)
}

/**
 * Find an anim object from an element and extract it
 * from the anim stack
 * @param  {DOMElement} element Element to find
 * @return {Object}
 */
function popAnim (element) {
	for (let i = animStack.length - 1; i >= 0; i--) {
		if (animStack[i].el === element)
			return animStack.splice(i, 1)[0]
	}
}

/**
 * Set the next for animation
 * @param {Object} anim Anim object to set
 */
function setNextFrame (anim) {
	anim.nextFrame = requestFakeNextFrame(function () {
		updateDisplay(anim)
	})
}

/**
 * Update the text of an anim object
 * @param  {Object} anim Anim object to update
 * @return {[type]}
 */
function updateDisplay (anim) {

	// Increase the counter
	anim.counter -= 1;

	if (anim.counter <= 0) {
		
		// Wait to be ready
		anim.el.textContent = anim.originalText
		popAnim(anim.el)
		return
	}

	var randomLength = Math.floor(anim.originalLength - anim.counter / ratioFrameRate);
	anim.el.textContent = anim.originalText.substr(0, randomLength) + getRandomWord(Math.min(anim.originalLength - randomLength, 3));

	setNextFrame(anim)
}


/**
 * getRandomWord
 * Get a random word (in lowercase)
 * 
 * @param	pLength	int 	Length of the random word
 * @return 			string 	Random word
 */
function getRandomWord (pLength) {
	var toReturn = '';
	var charList = 'abcdefghijklmnopqrstuvwxyz0123456789 _*%!?/\\|#@';

	// Param tests
	if (pLength <= 0) {
		return toReturn;
	}

	// Generate word
	for (let i = 0; i < pLength; i++) {
		toReturn += charList.charAt(Math.floor(Math.random() * charList.length));
	}

	return toReturn;
}

/**
 * Fake mock of requestAnimationFrame
 * @param  {Function} callback Function to call
 * @return {Int}
 */
function requestFakeNextFrame (callback){
  return window.setTimeout(callback, 60);
}

/**
 * Cancel a planed call
 * @param  {Int} id Process ID of the planed call to execute
 */
function cancelFakeNextFrame (id){
  return window.clearTimeout(id);
}

export default airportText