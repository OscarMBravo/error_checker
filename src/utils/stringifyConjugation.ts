
const stringifyConjugation = (word: any[], target: any[]) => {

    //let verbIsIncorrect = false;
    //let tenseIsIncorrect = false;
   // let personIsIncorrect = false;

    const wordVerb = word[0];
    const targetVerb = target[0];

    const wordTense =  word[1];
    const targetTense = target[1];

    const wordPerson = word[2];
    const targetPerson = word [2];

    if (wordVerb != targetVerb && wordTense == targetTense && wordPerson == targetPerson) {
        return "incorrectVerb"
    }
    else if (wordTense != targetTense && wordVerb == targetVerb && wordPerson == targetPerson) {
        return "incorrectTense"
    }
    else if (wordPerson != targetPerson && wordVerb == targetVerb && wordTense == targetTense) {
        return "incorrectPerson"
    }
    else return "none"
}

export default stringifyConjugation;