// import { caolLeathanChecker } from "./caolLeathanChecker";
import {
  conjugationChecker,
  fadaChecker,
  typoChecker,
  broadSlenderChecker,
  stringifyConjugation,
} from "./errorCheckers/index.js";

const runErrorCheck = (word: string, target: string) => {
  // This is where the four error functions are used and output is decided
  const conjugationOutput = conjugationChecker(word, target);
  let stringConjugationOutput = "null";
  if (conjugationOutput != null) {
    stringConjugationOutput = stringifyConjugation(
      conjugationOutput.word,
      conjugationOutput.target
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

export default runErrorCheck;
