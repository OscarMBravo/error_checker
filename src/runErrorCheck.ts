// import { caolLeathanChecker } from "./caolLeathanChecker";
import {
  conjugationChecker,
  fadaChecker,
  typoChecker,
  broadSlenderChecker,
  stringifyConjugation,
  precedingWordChecker,
  uruSeimhiuChecker,
} from "./errorCheckers/index.js";

const runErrorCheck = (
  word: string,
  target: string,
  hints: string[] | undefined
) => {
  // This is where the five error functions are used and output is decided

  console.log("hints:", hints);

  const conjugationOutput = conjugationChecker(word, target);
  console.log("conjugationOutput:", conjugationOutput);

  let stringConjugationOutput = "null";
  if (conjugationOutput !== null) {
    stringConjugationOutput = stringifyConjugation(
      conjugationOutput.word,
      conjugationOutput.target
    );
  }

  const fadaOutput = fadaChecker(word, target);
  const typoOutput = typoChecker(word, target);
  const broadSlenderOutput = broadSlenderChecker(word, target);
  const precedingWordOutput = precedingWordChecker(word, target);
  const uruSeimhiuOutput = uruSeimhiuChecker(word, target);

  const data = {
    word: word,
    target: target,
    conjugationOutput: conjugationOutput,
    fadaOutput: fadaOutput,
    typoOutput: typoOutput,
    broadSlenderOutput: broadSlenderOutput,
    precedingWordOutput: precedingWordOutput,
    uruSeimhiuOutput: uruSeimhiuOutput,
    stringConjugationOutput: stringConjugationOutput,
  };
  console.log("data:", data);
  return data;
};

export default runErrorCheck;
