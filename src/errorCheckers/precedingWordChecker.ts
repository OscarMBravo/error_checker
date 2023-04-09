const precedingWordChecker = (word: string, target: string) => {


    
    // Check ní/níor
    if (target.slice(0, 3).toLowerCase() === "ní ") {
        if (word.slice(0, 4).toLowerCase() === "níor") {
            return "niNotNior";
        }
    }
    else if (target.slice(0, 4).toLowerCase() === "níor") {
        if (word.slice(0, 3).toLowerCase() === "ní ") {
            return "niorNotNi";
        }
    }

    // Check an/ar
    else if (target.slice(0, 2).toLowerCase() === "ar") {
        if (word.slice(0, 2).toLowerCase() === "an") {
            return "arNotAn";
        }
    }
    else if (target.slice(0, 2).toLowerCase() === "an") {
        if (word.slice(0, 2).toLowerCase() === "ar") {
            return "anNotAr";
        }
    }

    //Check nach and go
    else if (target.slice(0, 4).toLowerCase() === "nach") {
        if (word.slice(0, 4).toLowerCase() != "nach") {
            return "nachLeftOut";
        }
    }
    else if (target.slice(0, 2).toLowerCase() === "go") {
        if (word.slice(0, 2).toLowerCase() != "go") {
            return "goLeftOut";
        }
    }

    else {
    
        return "none";
    }
}

export default precedingWordChecker;



