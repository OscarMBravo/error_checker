import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let allQuestions;
let allPossibleAnswers = [];
fs.readFile(path.join(__dirname, "allQuestions.json"), (err, data) => {
    if (err)
        throw err;
    allQuestions = JSON.parse(data.toString()).filter((q) => q.form !== 7); // read data and remove answers to the mixed 'additional questions section'
    allQuestions.map((q) => {
        !allPossibleAnswers.includes(q.answer)
            ? allPossibleAnswers.push(q.answer)
            : null; // loop through all questions and push ansewr to this array if it not already there
    });
    console.log("allPossibleAnswers:", allPossibleAnswers);
});
const conjugationChecker = (word, target) => {
    // first, check that the word and target are both in the 'allPossibleAnswers' array
    const wordInAnswers = allPossibleAnswers.includes(word);
    const targetInAnswers = allPossibleAnswers.includes(target);
    console.log("word in Answers:", wordInAnswers);
    console.log("target in Answers:", targetInAnswers);
    if (wordInAnswers && targetInAnswers) {
        // get array of questions with word as answer
        const wordHits = allQuestions.filter((q) => q.answer === target && q.form !== 7);
        console.log("word hits:", wordHits);
        // get array of questions with target as answer
        const targetHits = allQuestions.filter((q) => q.answer === target && q.form !== 7);
        console.log("target hits:", targetHits);
    }
    else {
        return false;
    }
};
export default conjugationChecker;
