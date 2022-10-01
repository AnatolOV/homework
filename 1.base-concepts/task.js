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


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //let start = "12/11/2023"
  // не понял как использовать функцию Date, как рассчитать время, на которое берется кредит, поставил просто 12. Подскажите, пожалуйста, как правильно сделать...
  let time = 12;
  let amountBody = amount - contribution;
  console.log(amountBody);
  let P = percent / 12 / 100;
  let pamentMonth = amountBody * (P + (P / (((1 + P) ** time) - 1)));
  console.log(pamentMonth);
  totalAmount = (pamentMonth * time).toFixed(2);
  console.log(totalAmount);
  // код для задачи №2 писать здесь

  return totalAmount;
}