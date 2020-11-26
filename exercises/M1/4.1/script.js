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

//Task 6

var chessman = 'Paw';
function chessMoves(chessman) {
    let chessMove = chessman.toLowerCase();
    switch(chessMove) {
        case 'pawn':
        chessMove = 'Advance one square along the same file. Advance two unoccupied squares at the start position. Capture at one diagonally forward square.';
        break;
        case 'rook':
        chessMove = 'Advance all unoccupied squares along a rank or file. Can do Castling';
        break;
        case 'knight':
        chessMove = 'Moves to the closest square which is not on the same file, rank or diagonal. Can leap chessman.';
        break;
        case 'bishop':
        chessMove = 'Moves to all unoccupied diagonal squares';
        break;
        case 'queen':
        chessMove = 'Moves to all unoccupied files, ranks and diagonal squares';
        break;
        case 'king':
        chessMove = 'Moves to all unoccupied adjacent squares. Can do Castling';
        break;
        default:
        chessMove = "Unkown chessman. Try again.";
    };
    console.log(chessMove);
};

//Task 7

var points = 600;
function pointToGrade(points) {
    let grade = null;
    if (points >= 90 && points <= 100) {
        grade = 'A';
    } else if (points >= 80 && points < 90) {
        grade = 'B';
    } else if (points >= 70 && points < 80) {
        grade = 'C';
    } else if (points >= 60 && points < 70) {
        grade = 'D';
    } else if (points >= 50 && points < 60) {
        grade = 'E';
    } else if (points >= 0 && points < 50) {
        grade = 'F';
    } else {
        console.log('points must range from 0 to 100')
    };
    console.log('Your grade is ' + grade);
};

//Task 8

function isItEven(a,b,c) {
    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        return true;
    };
};

//Task 9

function isItOdd(a,b,c) {
    if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
        return true;
    };
};

//Task 10

function grandProfit(a,c) {
    if (a < 0 || c < 0) {
        console.log('value must be greater than 0');
    } else {
        let profit = 1000 * [a - [1.2 * c]];
        console.log(profit);
    };
};

//Task 11

var salarioBruto = 3500;
function INSS_IR(salarioBruto) {
    let inss;
    let salarioBase;
    let ir;
    let salarioLiquido;

    if (salarioBruto <= 1556.94 && salarioBruto >= 0) {
        inss = salarioBruto * 0.08;
    } else if (salarioBruto >=1556.95 && salarioBruto <= 2594.92) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto >=2594.93 && salarioBruto <= 5189.82) {
        inss = salarioBruto * 0.11;
    } else if (salarioBruto > 5189.82) {
        inss = salarioBruto + 570.88;
    } else {
        console.log('Valor precisa ser maior que 0');
    };

    salarioBase = salarioBruto - inss;

    if (salarioBase <= 1903.98 && salarioBase >= 0) {
        ir = 0;
    } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        ir = [salarioBase * 0.075] - 142.8;
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        ir = [salarioBase * 0.15 ] - 354.8;
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        ir = [salarioBase * 0.225] - 636.13;
    } else if (salarioBase > 4664.68) {
        ir = [salarioBase * 0.275] - 869.36;
    } else {
        console.log('Valor precisa ser maior que 0');
    };
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
};

//Output area

return INSS_IR(salarioBruto);