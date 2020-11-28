let n = 6;
let index = 0;
let dot = '';
let indexSecond = 0;
let blanks = '';

//Task 1

console.log('Task 1 \nn = ',n);

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

console.log('\nTask 2\nn = ',n);

//Task 2

dot = '';
if (n > 1) {
  Math.ceil(n);
  for (index = 0; index < n; index += 1) {
  dot += '*';
  console.log(dot);
  };
} else {
  console.log('Número precisa ser maior que 1');
};

console.log('\nTask 3\nn = ',n);

//Task 3
//usar .repeat para adicionar string
indexThird = 0;
dot = '';
  for (indexSecond = 0; indexSecond < n; indexSecond += 1) {
    dot += '*';
    blanks = '';
    for (indexThird = 0; indexThird < (n - indexSecond) - 1; indexThird += 1) {
    blanks += ' ';
    };
    console.log(blanks + dot);
  };
