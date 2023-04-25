const uruSeimhiuChecker = (word: string, target: string) => {

    const uruCompatibleLetters = ["b", "c", "d", "g", "p", "t"];
    const urus = ["mb", "gc", "nd", "ng", "bp", "dt"];
    let wordIncludesUru = false;
    let targetIncludesUru = false;


    // first, remove the preceding word
    if (word.slice(0, 5).toLowerCase() === "níor " && target.slice(0, 5).toLowerCase() === "níor ") {
        target = target.slice(5);
        word = word.slice(5);
    }
    else if (word.slice(0, 3).toLowerCase() === "ní " && target.slice(0, 3).toLowerCase() === "ní ") {
        target = target.slice(3);
        word = word.slice(3);
    }
    else if (word.slice(0, 3).toLowerCase() === "go " && target.slice(0, 3).toLowerCase() === "go ") {
        target = target.slice(3);
        word = word.slice(3);
    }
    else if (word.slice(0, 5).toLowerCase() === "nach " && target.slice(0, 5).toLowerCase() === "nach ") {
        target = target.slice(5);
        word = word.slice(5);
    }
    else if (word.slice(0, 3).toLowerCase() === "an " && target.slice(0, 3).toLowerCase() === "an ") {
        target = target.slice(3);
        word = word.slice(3);
    }
    else if (word.slice(0, 3).toLowerCase() === "ar " && target.slice(0, 3).toLowerCase() === "ar ") {
        target = target.slice(3);
        word = word.slice(3);
    }
    

    // then, check if there's been a seimhiu left out or extra one added in
    if (target.charAt(1).toLowerCase() == "h" && word.charAt(1).toLowerCase() != "h") {
        return "seimhiuLeftOut"
    }
    else if (word.charAt(1).toLowerCase() == "h" && target.charAt(1).toLowerCase() != "h") {
        return "extraSeimhiu"
    }


    // check if some sort of uru has been used in the inputted word
    for (let i = 0; i < urus.length; i++) {
        if (word.slice(0, 2).toLowerCase() == urus[i]) {
            wordIncludesUru = true;
        }
    }
    if (word.slice(0, 3).toLowerCase() == "bhf") {
        wordIncludesUru = true;
    }

    // check if some sort of uru has been used in the target word
    for (let i = 0; i < urus.length; i++) {
        if (target.slice(0, 2).toLowerCase() == urus[i]) {
            targetIncludesUru = true;
        }
    }
    if (word.slice(0, 3).toLowerCase() == "bhf") {
        targetIncludesUru = true;
    }

    if (wordIncludesUru && !targetIncludesUru) {
        return "extraUru"
    }




    // finally, check if an uru has been left out or the wrong uru has been used
    else {
        if (target.slice(0, 3).toLowerCase() == "bhf" && word.slice(0, 3).toLowerCase() != "bhf") {
            if (!wordIncludesUru) {
                return "uruLeftOut";
            }
            else {
                return "wrongUru";
            }
        }
        for (let i = 0; i < urus.length; i++) {
            if (target.slice(0, 2).toLowerCase() == urus[i] && word.slice(0, 2).toLowerCase() != urus[i]) {
                if (!wordIncludesUru) {
                    return "uruLeftOut";
                }
                else {
                    return "wrongUru";
                }
            }
        }
    }

    return "no errors"
}

export default uruSeimhiuChecker;