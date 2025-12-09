const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, curr) => prev * curr, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(number) {
	let product = 1;
  for (let i = 1; i < number + 1; i++)
    product *= i;

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
