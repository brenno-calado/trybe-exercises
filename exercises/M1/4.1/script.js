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
        console.log(chessMove);
        break;
        case 'rook':
        chessMove = 'Advance all unoccupied squares along a rank or file. Can do Castling';
        console.log(chessMove);
        break;
        case 'knight':
        chessMove = 'Moves to the closest square which is not on the same file, rank or diagonal. Can leap chessman.';
        console.log(chessMove);
        break;
        case 'bishop':
        chessMove = 'Moves to all unoccupied diagonal squares';
        console.log(chessMove);
        break;
        case 'queen':
        chessMove = 'Moves to all unoccupied files, ranks and diagonal squares';
        console.log(chessMove);
        break;
        case 'king':
        chessMove = 'Moves to all unoccupied adjacent squares. Can do Castling';
        console.log(chessMove);
        break;
        default:
        chessMove = "Unkown chessman. Try again.";
        console.log(chessMove);
    }
};

//Output area

return chessMoves(chessman);
