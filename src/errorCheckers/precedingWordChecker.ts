const precedingWordChecker = (word: string, target: string) => {
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
