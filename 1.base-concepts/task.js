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
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  let intervalYear = new Date(date).getFullYear() - currentYear;
  console.log(intervalYear);
  let intervalMonth = intervalYear * 12 - currentMonth + new
    Date(date).getMonth();
  console.log(intervalMonth);


  if (isNaN(percent)) {
    console.log(`Параметр <percent> содержит неправильное значение ${percent}`);
  } else {
    percent = percent;
  }

  if (isNaN(contribution)) {
    console.log(`Параметр <contribution> содержит неправильное значение ${contribution}`);
  } else {
    contribution = contribution;
  }
  if (isNaN(amount)) {
    console.log(`Параметр <amount> содержит неправильное значение ${amount}`);
  } else {
    amount = amount;
  }
  if (isNaN(date)) {
    console.log(`Параметр <date> содержит неправильное значение ${date}`);
  } else {
    date = date;
  }

  let time = intervalMonth;
  let amountBody = amount - contribution;
  console.log(amountBody + " тело кредита");
  let P = percent / 12 / 100;
  let pamentMonth = (amountBody * (P + (P / (((1 + P) ** time) - 1)))).toFixed(2);
  pamentMonth = Number(pamentMonth);
  console.log(pamentMonth);
  totalAmount = (pamentMonth * time);
  console.log(totalAmount);


  return totalAmount;
}

calculateTotalMortgage(16, 300000, 3000000, "2044-8");
