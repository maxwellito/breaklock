const config = {
  GAME: {
    DIFFICULTY: {
      EASY: 3,
      MEDIUM: 4,
      HARD: 5
    },
    TYPE: {
      PRACTICE: 1,
      CHALLENGE: 2,
      COUNTDOWN: 3
    },
    ACTIONS: {
      TRY_AGAIN: 1,
      BACK_HOME: 2,
      CONTINUE: 3
    }
  },
  SOCIAL: {
    PLATFORMS: {
      FB: {
        NAME: 'Facebook',
        URL: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`
      },
      TWITTER: {
        NAME: 'Twitter',
        URL: (url, msg, tags) => `http://twitter.com/share?text=${encodeURI(msg)}&url=${encodeURI(url)}&hashtags=${encodeURI(tags.join(','))}`
      }
    },
    MESSAGE: 'I wasted my time on BreakLock, it\'s pointless, don\'t try it.',
    TAGS: ['breaklock']
  },
  URL: 'https://maxwellito.github.io/breaklock'
}

export default config
