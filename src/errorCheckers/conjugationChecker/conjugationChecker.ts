import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let allQuestions;
let allPossibleAnswers = [];

// read the allQuestions.json file
fs.readFile(path.join(__dirname, "allQuestions.json"), (err, data) => {
  if (err) throw err;

  // store in an array called 'allQuestions'
  allQuestions = JSON.parse(data.toString()).filter((q) => {
    return q.form_id !== 7;
  }); // read data and remove answers to the mixed 'additional questions section'

  // create an array of all possible answers
  allQuestions.map((q) => {
    !allPossibleAnswers.includes(q.answer)
      ? allPossibleAnswers.push(q.answer)
      : null; // loop through all questions and push answer to this array if it not already there
  });

  // log this array just to have a look
  // console.log("allPossibleAnswers:", allPossibleAnswers);
});

// conjugation checker will use the 2 arrays to first check if there is a conjugation/form/tense/verb error, and if so, then determine the type.
const conjugationChecker = (word: string, target: string) => {
  // first, check that the word and target are both in the 'allPossibleAnswers' array
  const wordInAnswers = allPossibleAnswers.includes(word);
  const targetInAnswers = allPossibleAnswers.includes(target);

  // console.log("word in Answers:", wordInAnswers);
  // console.log("target in Answers:", targetInAnswers);

  // only if both these exist (and are different) is this a conjugation/form/tense/verb error
  if (wordInAnswers && targetInAnswers) {
    // get array of questions with word as answer
    const wordHits = allQuestions.filter((q) => q.answer === word);
    // console.log("word hits:", wordHits);

    // get array of questions with target as answer
    const targetHits = allQuestions.filter((q) => q.answer === target);
    // console.log("target hits:", targetHits);

    // assuming answers only exist at one level!!!! <--- might have to rethink tthis
    return {
      word: [wordHits[0].verb_id, wordHits[0].tense_id, wordHits[0].form_id],
      target: [
        targetHits[0].verb_id,
        targetHits[0].tense_id,
        targetHits[0].form_id,
      ],
    };
  } else {
    return null;
  }
};

export default conjugationChecker;
