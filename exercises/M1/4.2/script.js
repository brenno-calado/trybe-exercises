let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0;
let sumNumbers = 0;
let meanResult = 0;
let maxResult = 0;
let minResult = numbers[0];
let Odds = 0;
let array25 = [];

// Task 1

  for (index = 0; index < numbers.length; index += 1) {
  console.log('Task 1: ',numbers[index]);
  };

//Task 2

  for (index = 0; index < numbers.length; index += 1) {
    sumNumbers += numbers[index];
  };
  console.log('Task 2: ',sumNumbers);

//Task 3

  meanResult = sumNumbers / numbers.length;
console.log('Task 3: ',meanResult);

//Task 4

if (meanResult > 20) {
  console.log('Task 4: valor maior que 20')
} else {
  console.log('Task 4: valor menor ou igual a 20')
};

//Task 5

for (index = 0; index < numbers.length; index += 1) {
  maxResult = maxResult < numbers[index] ? maxResult = numbers[index] : maxResult;
};
console.log('Task 7: ',maxResult);

//Task 6

for (index = 0; index < numbers.length; index += 1) {
  Odds = numbers[index] % 2 != 0 ? Odds +=1 : Odds;
};
console.log('Task 6: ',Odds);

//Task 7

for (index = 0; index < numbers.length; index += 1) {
  minResult = minResult > numbers[index] ? minResult = numbers[index] :minResult;
};
console.log('Task 7: ',minResult);

//Task 8

for (index = 1; index <= 25; index += 1) {
  array25.push(index);
};
console.log('Task 8: ',array25);

//Task 9

for (index = 0; index < array25.length; index += 1) {
  console.log('Task 9: ',array25[index]/2);
};

