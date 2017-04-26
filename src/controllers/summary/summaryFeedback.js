const SUCCESS_QUOTES_LIST = [
	{ min:   1, max:   3, text: 'That was pure luck, nothing else. Stop dreamin.'},
	{ min:   2, max:   4, text: 'You got lucky, without staying up all night.'},
	{ min:   1, max:   2, text: 'No merit. Absolutely none.'},
	{ min:   2, max:   5, text: 'That was given on a golden plate.'},
	{ min:   1, max:   4, text: 'Absolutely no synapse got used during that game.'},
	{ min:   2, max:   5, text: 'Don\'t even dare to tweet your score.'},
	{ min:   8, max:  10, text: 'Saperlipopette!! That was close.'},
	{ min:   4, max:   8, text: 'Seems legit, with a bit of luck.'},
	{ min:   7, max:  10, text: 'Pretty good!'},
	{ min:   9, max:  10, text: 'But you made it!'},
	{ min:  11, max:  50, text: 'Trying random patterns is not a strategy...'},
	{ min:  11, max:  50, text: 'That was looooooooong.'},
	{ min:  11, max:  50, text: 'At least you made it.'},
	{ min:  11, max:  50, text: 'You must hate this game by now.'},
	{ min:  11, max:  50, text: 'I hope you didn\'t cheat.'},
	{ min:  41, max: 403, text: 'Your dedication is impressive.'},
	{ min: 404, max: 404, text: 'Logic not found.'},
	{ min: 405, max: 999, text: 'No comment.'}
]

const FAIL_QUOTES_LIST = [
	'I believe there\'s some work to do.',
	'Do you understand the game? Don\'t take it personnaly, I struggle to explain it.',
	'One day you will make it...',
	'It\'s not funny for you, but it is for me ;)',
	'Don\'t stress, you will make it.',
	'If you want to avoid battles, stay out of the grassy areas!',
	'Even if you loose in battle, if you surpass what you\'ve done before, you have bested yourself.',
	'TILT! Insert coin and try again!'
]

/**
 * Get a random quote to provide an awful
 * feedback to the player.
 * @param  {boolean} wasSuccess    Type of quote to get
 * @param  {number}  attemptsCount Quote score
 * @return {string}
 */
function getQuote (wasSuccess, attemptsCount) {
	let feedback, matches
	if (wasSuccess) {
		feedback = `Lock found in ${attemptsCount} attempts. `
		matches = SUCCESS_QUOTES_LIST
	              .filter(quote => (quote.min <= attemptsCount && quote.max >= attemptsCount))
	              .map(quote => quote.text)
	}
	else {
		feedback = 'Sorry, you didn\'t make it this time. '
		matches = FAIL_QUOTES_LIST
	}

	return feedback + matches[Math.floor(matches.length * Math.random())]
}

export default getQuote
