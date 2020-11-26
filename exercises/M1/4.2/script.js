let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0;
let sumNumbers = 0;
let meanResult = 0;
let maxResult = 0;

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
console.log(maxResult);

//Task 6



//Task 7



//Task 8



//Task 9



