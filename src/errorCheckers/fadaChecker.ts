const fadaChecker = (word: string, target: string) => {
  const FADAS = ["á", "é", "í", "ó", "ú"];
  const NON_FADAS = ["a", "e", "i", "o", "u"];
  const CONSONANTS = ["b", "c", "d", "f", "g", "l", "m", "n", "p", "r", "s", "t"];
  var consonantsInRightPlace: boolean = true;


 
  let firstWordNi = target.charAt(0) + target.charAt(1);
  let firstWordNior = target.charAt(0) + target.charAt(1) + target.charAt(2) + target.charAt(3);
  
/*  if(firstWordNi == 'ní' || firstWordNi == 'Ní'){
     target = target.slice(3);
     word = word.slice(3);
  }
  else if (firstWordNior == 'níor' || firstWordNior == 'Níor'){
    target = target.slice(5);
    word = word.slice(5);
  } */
  
  // make it so the program only runs as long as the length of the shorter word

  let shorterWordLength = target.length;

  if (word.length < target.length) {
    shorterWordLength = word.length;
  }

  for (let i = 0; i < shorterWordLength; i++) {
    //let tLetter = target.charAt(i);
    //let wLetter = word.charAt(i);

    for (let indexConsonants = 0; indexConsonants < 12; indexConsonants++) {
       if (target.charAt(i) == CONSONANTS[indexConsonants]) {
          if (word.charAt(i) != CONSONANTS[indexConsonants]) {
             consonantsInRightPlace = false;
          }
       }
    }
  }

  for (let i = 0; i < shorterWordLength; i++) {
    let targetLetter = target.charAt(i);

    // Check if the letter of the target word reached is a fada

    for (let fadaIndex = 0; fadaIndex < 5; fadaIndex++) {
      // If so, see if the corresponding letter of the inputted word is its non-fada version
      if (targetLetter == FADAS[fadaIndex]) {
        let actualLetter = word.charAt(i);
        if (actualLetter == NON_FADAS[fadaIndex]) {
          return "omittedFada";
        }
      }
    }

    // Check if the letter of the target word reached is a non-fada vowel

    for (let nonFadaIndex = 0; nonFadaIndex < 5; nonFadaIndex++) {
      // If so, see if the corresponding letter of the inputted word is its fada equivalent
      if (targetLetter == NON_FADAS[nonFadaIndex]) {
        let actualLetter = word.charAt(i);
        if (actualLetter == FADAS[nonFadaIndex]) {
          return "extraFada";
        }
      }
    }
  }

  return "no fada errors!";
};

// var answer = FadaCheck('ceardgfdsi', 'ceardfgi');
// console.log(answer);

export default fadaChecker;
