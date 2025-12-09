const fibonacci = function(number) {
    number = +number;

    if (number < 0)
        return "OOPS"
    const numbers = new Array(number + 1);

    numbers[0] = 0;
    numbers[1] = 1;

    for (let i = 2; i < number + 1; i++)
        numbers[i] = numbers[i - 1] + numbers[i - 2];

    return numbers[number];
};

// Do not edit below this line
module.exports = fibonacci;
