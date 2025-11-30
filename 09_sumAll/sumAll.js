const sumAll = function(start, end) {
    if (!Number.isInteger(start) || 
        !Number.isInteger(end) ||
        start < 0
    ) {
        return "ERROR"
    }

    if (start > end) {
        let tmp;
        tmp = start;
        start = end;
        end = tmp;
    }

    let sum = 0;

    for (let i = start; i < end + 1; i++) {
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
