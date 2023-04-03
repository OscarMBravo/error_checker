const stringifyConjugation = (word, target) => {
    //let verbIsIncorrect = false;
    //let tenseIsIncorrect = false;
    // let personIsIncorrect = false;
    const wordVerb = word[0];
    const targetVerb = target[0];
    const wordTense = word[1];
    const targetTense = target[1];
    const wordForm = word[2];
    const targetForm = target[2];
    console.log("\n\finding errors\n\n\n:");
    console.log(wordForm, targetForm);
    console.log(wordVerb, targetVerb);
    console.log(wordTense, targetTense);
    if (wordVerb != targetVerb && wordTense == targetTense && wordForm == targetForm) {
        return "incorrectVerb";
    }
    else if (wordTense != targetTense && wordVerb == targetVerb && wordForm == targetForm) {
        return "incorrectTense";
    }
    else if (wordForm != targetForm && wordVerb == targetVerb && wordTense == targetTense) {
        return "incorrectForm";
    }
    else if (wordVerb == targetVerb && wordTense == targetTense && wordForm == targetForm) {
        return "incorrectPerson";
    }
    else
        return "none";
};
export default stringifyConjugation;
