const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  let result = 0;
  let name = '';
  const userKeys = Object.keys(employees);
  // console.log(userKeys);

  for (const key of userKeys) {
    if (employees[key] > result) {
      result = employees[key];
      name = key;
    }
  }
  return name;
};

// let result = 0
// let name = ''
// const usersKyes = Object.keys(users);
// for (key of usersKyes) {
//   if (users[key] > result) {
//     result = users[key];
//     name = key
//   }
//   return name
// }

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'