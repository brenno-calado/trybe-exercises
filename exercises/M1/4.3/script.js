let n = 9;
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

dot = '';
  for (index = 0; index < n; index += 1) {
    dot += '*';
    blanks = '';
    for (indexSecond = 0; indexSecond < (n - index) - 1; indexSecond += 1) {
    blanks += ' ';
    };
    console.log(blanks + dot);
  };


console.log('\nTask 4\n')

//Task 4
//if n % 2 == 0
// index of dot = 2 and moves 2 by 2
//index of space = add half of n and roof number - index of dot
//print (blanks + dot + blanks)
dot = '';
if (n >= 3) {
  Math.round(n);
  if (n % 2 == 0) {
    for (index = 0; index < n; index += 2) {
      dot += '**';
      blanks = '';
      for (indexSecond = 0; indexSecond < (n - index) - 2; indexSecond += 2) {
          blanks += ' ';
          };
      console.log(blanks + dot + blanks);
    };
  } else {
      for (index = 0; index < n; index += 2) {
        if (index == 0) {
          dot += '*';
          blanks = '';
        } else {
        dot += '**';
        blanks = '';
        };
        for (indexSecond = 1; indexSecond < n - index; indexSecond += 2) {
          blanks += ' ';
          };
        console.log(blanks + dot + blanks);
        };
      };
} else {
  console.log('Number is not greater or equal to 2');
};

console.log('\nBonus 1\n');

let blankAmount = (n - 1) / 2;
let innerBlanks = '';
for (index = 0; index < n; index += 2) {
  blanks = '';
  dot = '';
  for (indexSecond = 0; indexSecond < blankAmount; indexSecond += 1) {
    blanks += ' ';
  }
  dot += '*';
  if (index === 0) {
    console.log(blanks + dot + blanks);
  } else if (index === 2) {
    innerBlanks += ' ';
    console.log(blanks + dot + innerBlanks + dot + blanks);
  } else if (index > 2 & index < n -1) {
    innerBlanks += '  ';
    console.log(blanks + dot + innerBlanks + dot + blanks);
  } else if (index = n - 1) {
    for (indexSecond = 1; indexSecond < n; indexSecond += 1) {
      dot += '*';
    }
    console.log(dot);
  }
  blankAmount -= 1;
}
let notPrime = 'O número não é primo';
let prime = 'O número é primo.';
function isItPrime(n) {
  for (index = 1; index < n; index += 1) {
    if (index % n === 0 || index !== 1) {
      console.log(notPrime);
      return notPrime;
    }
  }
  console.log(prime);
  return prime;
}
isItPrime(n);
