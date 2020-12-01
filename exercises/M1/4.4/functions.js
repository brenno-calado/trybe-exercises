//Used the explanation of the second way of reversing a string at free code camp <https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/>

function verifypalindrome(word) {
  backwardsWord = '';
  for (let index = word.length - 1; index >= 0; index -= 1) {
    backwardsWord += word[index];
  };
  let palindromeCheck = backwardsWord === word;
  return palindromeCheck;
};

function greaterFromArray(arrayOne) {
  let greatestIndex = 0;
  for (let index in arrayOne) {
    if (arrayOne[greatestIndex] < arrayOne[index]) {
      greatestIndex = index;
    };
  };
  return greatestIndex;
};

console.log(greaterFromArray([2, 3, 6, 7, 10, 11]));

function smallerFromArray(arrayOne) {
  let smallestIndex = arrayOne[0];
  for (let index in arrayOne) {
    if (arrayOne[smallestIndex] > arrayOne[index]) {
      smallestIndex = index;
    };
  };
  return smallestIndex;
};
console.log(smallerFromArray([2, 3, 6, 7, 10, 11]));

function bigName(nameList) {
  let biggestName = nameList[0];
  for (let index in nameList) {
    if (biggestName.length < nameList[index].length) {
      biggestName = nameList[index];
    };
  };
  return biggestName;
};

console.log(bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function modeNumber(numberList) {
  let index = 0;
  let indexCompare = 0;
  let mode = 0;
  let bestMode = 0;
  let bestModeIndex = 0;
  for (index in numberList) {
    mode = 0;
    for (indexCompare in numberList) {
      mode = numberList[index] == numberList[indexCompare] ? mode += 1 : mode = mode;
    };
    if (bestMode < mode) {
      bestMode = mode;
      bestModeIndex = index;
    };
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

//Used Trybe feedback for exercise 7

function verifyEndWord(word,ending) {
  let verifyCheck = true;
  if (word.length >= ending.length) {
    for (let index in ending) {
      if (word[(word.length - ending.length) + index] != ending[index]) {
        verifyCheck = false;
      };      
    };
    return verifyCheck;
  } else {console.log('ending word must be smaller than comparing word')};
};

console.log(verifyEndWord('brenno','on'));