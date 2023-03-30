// import { caolLeathanChecker } from "./caolLeathanChecker";
import {
  conjugationChecker,
  fadaChecker,
  typoChecker,
  broadSlenderChecker,
  stringifyConjugation,
} from "./errorCheckers/index.js";
const runErrorCheck = (word, target) => {
  // This is where the four error functions are used and output is decided
  const conjugationOutput = conjugationChecker(word, target);
  let stringConjugationOutput = "null";
  if (Array.isArray(conjugationOutput)) {
    stringConjugationOutput = stringifyConjugation(
      conjugationOutput[0],
      conjugationOutput[1]
    );
  }
  const fadaOutput = fadaChecker(word, target);
  const typoOutput = typoChecker(word, target);
  const broadSlenderOutput = broadSlenderChecker(word, target);
  const data = {
    word: word,
    target: target,
    conjugationOutput: conjugationOutput,
    fadaOutput: fadaOutput,
    typoOutput: typoOutput,
    broadSlenderOutput: broadSlenderOutput,
    stringConjugationOutput: stringConjugationOutput,
  };
  console.log("data:", data);
  return data;
};
runErrorCheck("duirt", "dúirt");
// export default runErrorCheck;
