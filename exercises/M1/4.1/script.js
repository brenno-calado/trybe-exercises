var a = 10;
var b = 5;
var c = 2;

//Task 1

let add = a + b
let subtract = a - b;
let multiply = a * b; 
let divide = a / b;
let remainder = a % b;

//Task 2

let greaterThan = a > b ? a : b;

//Task 3

function greaterOfThree(a,b,c) {
    if (a > b && a > c) {
        console.log(a)
    }
    else if (b > c) {
        console.log(b)
    }
    else if (c != a && c != b) {
        console.log(c)
    }
    else {console.log('Os números são iguais')}
};

//Task 4

function positiveNegative(a) {
    let result = a > 0 ? 'positive' : a < 0 ? 'negative' : 'zero';
    console.log(result);
};

//Task 5

function triangleTest(a,b,c) {
    let triangleOutput = a + b + c == 180;
    console.log(triangleOutput);
};

//Output area

return triangleTest(a,b,c);
