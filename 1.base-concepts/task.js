"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let x1;
  let x2;
  let discrement;
  discrement = b ** 2 - 4 * a * c;

  if (discrement < 0) {
    arr = [];
  } else if (discrement === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else if (discrement > 0) {
    x1 = (-b + Math.sqrt(discrement)) / (2 * a);
    arr.push(x1);
    x2 = (-b - Math.sqrt(discrement)) / (2 * a);
    arr.push(x2);
  }
  return arr; // array
}

solveEquation(154, 2455, 1);
console.log(solveEquation(154, 2455, 1));

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
