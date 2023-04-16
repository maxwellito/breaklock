const getLang = () => {
    return document.documentElement.lang;;
}

const customRussianRule = (choice, choicesLength) => {
    /*
        Russian pluralization rule
        0 - emty
        1 - ends in 1 and not within 11-19 (eg 51 машина, 81 машина)
        2 - not within 11-19 and ends within 2-4 (eg 22 машины, 54 машины)
        3 - within 11-19 or ends within 5-9 (11 машин, 59 машин)
    */
      if (choice === 0) {
          return 0;
      }
  
      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;
      if (!teen && endsWithOne) {
          return 1;
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
          return 2;
      }
  
    return choicesLength < 4 ? 2 : 3
}

const pluralRules = {
    'ru': customRussianRule
}
  
export const pluralize = (word, count) => {
    const variants = word.split(' | ');
    const code = getLang();
    if (variants.length === 1 || !pluralRules[code]) return word;

    const index = pluralRules[code](count, variants.length);
    return variants[index] || word;
}

