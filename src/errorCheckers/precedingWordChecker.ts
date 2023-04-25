const precedingWordChecker = (word: string, target: string) => {

  // Check if they left out a space between the preceding word and the main one

  if (target.slice(0, 3).toLowerCase() === "ní " && word.slice(0, 2).toLowerCase() === "ní" && word.slice(0, 3).toLowerCase() != "ní "){
    return "níNoSpace"
  }
  else if (target.slice(0, 5).toLowerCase() === "níor " && word.slice(0, 4).toLowerCase() === "níor" && word.slice(0, 5).toLowerCase() != "níor "){
    return "níorNoSpace"
  }

  // Check ní/níor
  if (target.slice(0, 3).toLowerCase() === "ní ") {
    if (word.slice(0, 4).toLowerCase() === "níor") {
      return "niNotNior";
    } else {
      return "none";
    }
  } else if (target.slice(0, 4).toLowerCase() === "níor") {
    if (word.slice(0, 3).toLowerCase() === "ní ") {
      return "niorNotNi";
    } else {
      return "none";
    }
  }

  // Check an/ar
  else if (target.slice(0, 2).toLowerCase() === "ar") {
    if (word.slice(0, 2).toLowerCase() === "an") {
      return "arNotAn";
    } else {
      return "none";
    }
  } else if (target.slice(0, 2).toLowerCase() === "an") {
    if (word.slice(0, 2).toLowerCase() === "ar") {
      return "anNotAr";
    } else {
      return "none";
    }
  }

  //Check nach and go
  else if (target.slice(0, 4).toLowerCase() === "nach") {
    if (word.slice(0, 4).toLowerCase() != "nach") {
      return "nachLeftOut";
    } else {
      return "none";
    }
  } else if (target.slice(0, 2).toLowerCase() === "go") {
    if (word.slice(0, 2).toLowerCase() != "go") {
      return "goLeftOut";
    } else {
      return "none";
    }
  } else {
    return "none";
  }
};

export default precedingWordChecker;
