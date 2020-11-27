let n = 1.1;
let index = 0;
let dot = '';
let indexSecond = 0;

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