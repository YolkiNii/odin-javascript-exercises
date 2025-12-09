const palindromes = function (word) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

    const cleanWord = word.toLowerCase()
        .split("")
        .filter(char => alphanumeric.includes(char))

    const reversed = cleanWord.toReversed();

    return cleanWord.join("") === reversed.join("")
};

// Do not edit below this line
module.exports = palindromes;
