const repeatString = function(s, repeatCount) {
    if (repeatCount < 0) {
        return "ERROR";
    }

    let repeat = "";
    for (let i = 0; i < repeatCount; i++) {
        repeat += s;
    }

    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
