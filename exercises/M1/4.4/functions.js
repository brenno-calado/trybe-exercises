//Used the explanation of the second way of reversing a string at free code camp <https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/>

function verifypalindrome(word) {
  backwardsWord = '';
  for (let index = word.length - 1; index >= 0; index -= 1) {
    backwardsWord += word[index];
  };
  console.log(backwardsWord);
  let palindromeCheck = backwardsWord === word;
  console.log(palindromeCheck);
}

function greaterFromArray(arrayOne) {
  let theGreatest = 0;
  let greatestIndex = 0;
  for (let index = 0; index < arrayOne.length; index += 1) {
    if (theGreatest < arrayOne[index]) {
      theGreatest = arrayOne[index];
      greatestIndex = index;
    } else continue;
  };
  return greatestIndex;
};
let testArray = [2, 3, 6, 7, 10, 11];
console.log(greaterFromArray(testArray));

function smallerFromArray(arrayOne) {
  let theSmallest = arrayOne[0];
  let smallestIndex = arrayOne[0];
  for (let index = 0; index < arrayOne.length; index += 1) {
    if (theSmallest >= arrayOne[index]) {
      theSmallest = arrayOne[index];
      smallestIndex = index;
    } else continue;
  };
  return smallestIndex;
};
console.log(smallerFromArray(testArray));

function bigName(nameList) {
  let biggestName = nameList[0];
  for (let index = 0; index < nameList.length; index += 1) {
    if (biggestName.length < nameList[index].length) {
      biggestName = nameList[index];
    } else continue;
  };
  return biggestName;
};
nameList = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(bigName(nameList));

function modeNumber(numberList) {
  let indexCompare = 0;
  let mode = 0;
  let bestMode = 0;
  let bestModeIndex = 0;
  for (let index = 0; index < numberList.length; index += 1) {
    mode = 0;
    for (indexCompare = 0; indexCompare < numberList.length; indexCompare += 1) {
      mode = numberList[index] == numberList[indexCompare] ? mode += 1 : mode = mode;
    };
    if (bestMode < mode) {
      bestMode = mode;
      bestModeIndex = index;
    } else continue;
    };
    return numberList[bestModeIndex];
  };

let numberList = [2, 3, 2, 5, 8, 2, 3];
console.log(modeNumber(numberList));

let number = 5;

function sumTillNumber(number) {
  let sumResult = 0;
  for (let index = 0; index <= number; index += 1) {
    sumResult += index;
  }
  return sumResult;
};
console.log(sumTillNumber(number));