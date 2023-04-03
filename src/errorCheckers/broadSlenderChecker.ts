const broadSlenderChecker = (word: string, target: string) => {
    const BROAD = ['a', 'o', 'u', 'á', 'ó', 'ú', 'A', 'O', 'U', 'Á', 'Ó', 'Ú'];
    const SLENDER = ['e', 'i', 'é', 'í', 'E', 'I', 'É', 'Í'];
    const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'Z'];
    const IGNORE = ['aniar', 'aníos', 'aréir', 'arís', 'aríst', 'anseo', 'ansin', 'ansiúd', 'cén', 'den', 'faoina', 'ina', 'inar', 'insa', 'lena', 'lenar'];
    
    let onBroad:boolean = false;
    let onSlender:boolean = false;
    let isAfterConsonants:boolean = false;
    
    // First, check if the word inputted is an exception to the caol le caol, leathan le leathan rule.
    for (let ignoreIndex = 0; ignoreIndex < IGNORE.length; ignoreIndex++) {
       if (word == IGNORE[ignoreIndex]) {
          return "this word is an exception to the rule"
       }
    }
    
    
    
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word.charAt(i);
    
      // Check if it's a broad vowel
      for (let broadIndex = 0; broadIndex < BROAD.length; broadIndex++) {
          if (BROAD[broadIndex] == currentLetter) {
             onBroad = true;
    
             // If it is one, check if the current letter comes after a block of consonants
             if (isAfterConsonants) {
    
                if (onSlender) {
                   return "againstRule"
                }
    
                else {
                  isAfterConsonants = false;
                  onSlender = false;
                }
             }
             else {
                onSlender = false;
             }
          }
      }
    
    
      // Check if it's a slender vowel
      for (let slenderIndex = 0; slenderIndex < SLENDER.length; slenderIndex++) {
          if (SLENDER[slenderIndex] == currentLetter) {
            onSlender = true;
    
            // If it is one, check if the current letter comes after a block of consonants
             if (isAfterConsonants) {
    
                if (onBroad) {
                   return "againstRule"
                }
    
                else {
                 isAfterConsonants = false;
                 onBroad = false;
                }
             }
             else {
                onBroad = false;
             }
          }
      }
    
      // Check if it's a consonant
      for (let consonantIndex = 0; consonantIndex < CONSONANTS.length; consonantIndex++) {
          if (CONSONANTS[consonantIndex] == currentLetter) {
             isAfterConsonants = true;
          }
      }
    
      // Check if it's a blank space
      if(currentLetter == ' '){
         onBroad = false;
         onSlender = false;
         isAfterConsonants = false;
      }
    
    }
    // If no issues arise, it follows the rule
    return "no issues here"
    }
  export default broadSlenderChecker;