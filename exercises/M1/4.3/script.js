let n = 3;
let index = 0;
let dot = '';
let indexSecond = 0;

//Task 1

if (n > 1) {
  Math.ceil(n);
  for (indexSecond = 0; indexSecond < n; indexSecond += 1) {
  dot += '*';
  };
  for (index = 0; index < n; index += 1) {
  console.log(dot);
  };
} else {
  console.log('Número precisa ser maior que 1');
};
console.log('\n')

//Task 2

dot = '';
if (n > 1) {
  Math.ceil(n);
  for (indexSecond = 0; indexSecond < n; indexSecond += 1) {
  dot += '*';
  console.log(dot);
  };
} else {
  console.log('Número precisa ser maior que 1');
};

