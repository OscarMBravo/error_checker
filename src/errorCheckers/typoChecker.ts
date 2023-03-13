const typoChecker = (word: string, target: string) => {
  const wn = word ? word.length : 0;
  const tn = target ? target.length : 0;

  // Check if either is blank

  if (wn === 0) {
    return tn;
  }
  if (wn === 0) {
    return tn;
  }

  // If not, create a levenshtein matrix

  const matrix = new Array<number[]>(wn + 1);
  for (let i = 0; i <= tn; ++i) {
    let row = (matrix[i] = new Array<number>(wn + 1));
    row[0] = i;
  }
  const firstRow = matrix[0];
  for (let j = 1; j <= wn; ++j) {
    firstRow[j] = j;
  }
  for (let i = 1; i <= tn; ++i) {
    for (let j = 1; j <= wn; ++j) {
      if (target.charAt(i - 1) === word.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          Math.min(
            matrix[i - 1][j - 1], // Substitution
            matrix[i][j - 1], // Insertion
            matrix[i - 1][j] // Deletion
          ) + 1;
      }
    }
  }
  return matrix[tn][wn];
};

// var answer = levenshtein('dit', 'duirt');
// console.log(answer);

export default typoChecker;
