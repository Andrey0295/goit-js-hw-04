// const counts = { a: 1, b: 2, c: 10 };
// console.log(counts);

// let totalCounts = 0;
// const keys = Object.keys(counts);
// console.log(keys);

// for (const key of keys) {
//   console.log(counts[key]);
//   totalCounts += counts[key];
// }
// console.log(totalCounts);

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  let bigestMoney = 0;
  const employeesKeys = Object.keys(employees);
  // console.log(employeesKeys);

  for (const key of employeesKeys) {
    // console.log(employees[key]);
    bigestMoney += employees[key];
  }
  return bigestMoney;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
