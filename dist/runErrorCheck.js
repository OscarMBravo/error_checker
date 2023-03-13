// import { caolLeathanChecker } from "./caolLeathanChecker";
import { conjugationChecker, fadaChecker, typoChecker, broadSlenderChecker, stringifyConjugation } from "./errorCheckers/index.js";
const runErrorCheck = (word, target) => {
    // This is where the four error functions are used and output is decided
    const conjugationOutput = conjugationChecker(word, target);
    const stringifyConjugationOutput = stringifyConjugation(conjugationChecker(word, target));
    // const stringConjugationOutput = stringifyConjugationOutput(conjugationOutput);
    const fadaOutput = fadaChecker(word, target);
    const typoOutput = typoChecker(word, target);
    const broadSlenderOutput = broadSlenderChecker(word, target);
    return {
        word: word,
        target: target,
        conjugationOutput: conjugationOutput,
        fadaOutput: fadaOutput,
        typoOutput: typoOutput,
        broadSlenderOutput: broadSlenderOutput,
        stringifyConjugationOutput: stringifyConjugationOutput
    };
};
export default runErrorCheck;
