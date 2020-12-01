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