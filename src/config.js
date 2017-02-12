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
        URL: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url_encode(url)}`
      },
      TWITTER: {
        URL: (url, msg, tags) => `http://twitter.com/share?text=${url_encode(msg)}&url=${url_encode(url)}&hashtags=${url_encode(tags.join(','))}`
      }
    }
  }
}

export default config
