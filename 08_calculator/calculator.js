const add = function (num1, num2) {
  return num1 + num2;

};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let result = 0;
  numbers.forEach(element => {
    result = result + element;
  });
  return result;
};

const multiply = function (numbers) {
  let result = 1;
  numbers.forEach(element => {
    result = result * element;
  });
  return result;
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  result = 1;
  for (let index = number; index > 0; index--) {
    result = result * index;
  }
  return result;
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
