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

  if (percent === String(percent)) {
    percent = Number(percent);
    console.log("percent - Строка преобразована в число");
  } else if (percent === Number(percent)) {
    percent = percent;
  } else {
    console.log(`Параметр <percent> содержит неправильное значение ${percent}`);
  }
  if (contribution === String(contribution)) {
    contribution = Number(contribution);
    console.log("contribution - Строка преобразована в число");
  } else if (contribution === Number(contribution)) {
    contribution = contribution;
  } else {
    console.log(`Параметр <contribution> содержит неправильное значение ${contribution}`);
  }
  if (amount === String(amount)) {
    amount = Number(amount);
    console.log("amount - Строка преобразована в число");
  } else if (amount === Number(amount)) {
    amount = amount;
  } else {
    console.log(`Параметр <amount> содержит неправильное значение ${amount}`);
  }
  if (date === String(date)) {
    date = Number(date);
    //console.log(date);
    console.log("date - Строка преобразована в число");
  } else if (date === Number(date)) {
    date = date;
  } else {
    console.log(`Параметр <date> содержит неправильное значение ${date}`);
  }

  let time = intervalMonth;
  let amountBody = amount - contribution;
  console.log(amountBody + " тело кредита");
  let P = percent / 12 / 100;
  let pamentMonth = amountBody * (P + (P / (((1 + P) ** time) - 1)));
  console.log(Math.ceil((pamentMonth) * 100) / 100);
  totalAmount = Math.ceil((pamentMonth * time) * 100) / 100;
  console.log(totalAmount);


  return totalAmount;
}
calculateTotalMortgage(16, 300000, 3000000, "2044, 04");

//percent - % годовых;
//contribution - первоначальный взнос по кредиту;
//amount - сумма кредита;
//date - срок кредита;