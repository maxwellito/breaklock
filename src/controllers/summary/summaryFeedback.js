const SUCCESS_QUOTES_LIST = [
	{ min:   1, max:   3, text: '#@quote_success00' },
	{ min:   2, max:   4, text: '#@quote_success01' },
	{ min:   1, max:   2, text: '#@quote_success02' },
	{ min:   2, max:   5, text: '#@quote_success03' },
	{ min:   1, max:   4, text: '#@quote_success04' },
	{ min:   2, max:   5, text: '#@quote_success05' },
	{ min:   8, max:  10, text: '#@quote_success06' },
	{ min:   4, max:   8, text: '#@quote_success07' },
	{ min:   7, max:  10, text: '#@quote_success08' },
	{ min:   9, max:  10, text: '#@quote_success09' },
	{ min:  11, max:  50, text: '#@quote_success10' },
	{ min:  11, max:  50, text: '#@quote_success11' },
	{ min:  11, max:  50, text: '#@quote_success12' },
	{ min:  11, max:  50, text: '#@quote_success13' },
	{ min:  11, max:  50, text: '#@quote_success14' },
	{ min:  41, max: 403, text: '#@quote_success15' },
	{ min: 404, max: 404, text: '#@quote_success16' },
	{ min: 405, max: 999, text: '#@quote_success17' },
]

const FAIL_QUOTES_LIST = [
	'#@quote_fail00',
	'#@quote_fail01',
	'#@quote_fail02',
	'#@quote_fail03',
	'#@quote_fail04',
	'#@quote_fail05',
	'#@quote_fail06',
	'#@quote_fail07',
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
		feedback = `#@feedback_success_first ${attemptsCount} #@feedback_success_second `
		matches = SUCCESS_QUOTES_LIST
	              .filter(quote => (quote.min <= attemptsCount && quote.max >= attemptsCount))
	              .map(quote => quote.text)
	}
	else {
		feedback = '#@feedback_fail '
		matches = FAIL_QUOTES_LIST
	}

	return feedback + matches[Math.floor(matches.length * Math.random())]
}

export default getQuote
