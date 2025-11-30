const removeFromArray = function(arr) {
    removalElements = Array.prototype.slice.call(arguments, 1)

    return arr.filter(element => !removalElements.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
