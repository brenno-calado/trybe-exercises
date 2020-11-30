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
verifypalindrome('arara');