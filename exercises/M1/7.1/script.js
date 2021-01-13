factorial = number => {
  if (number > 1) {
    let result = number;
    for (let index = number - 1; index > 1; index -= 1) {
      result *= index;
    }
    return result
  } else {
    let result = 1;
    return result
  }
};

console.log(factorial(5));

const longestWord = (phrase) => {
  const breakedWords = phrase.split(' ');
  let maxLength = 0;
  let biggestWord = '';
  for (let i in breakedWords) {
    if (maxLength <= breakedWords[i].length) {
      maxLength = breakedWords[i].length;
      biggestWord = breakedWords[i];
    }
  }
  return biggestWord
}

console.log(longestWord('brenno calado vieira de meloasdasdad nascimento'));

let clickCount = 0;

const clickCounter = () => {
  const clickCountDiv = document.querySelector('#click-count-div');
  clickCount += 1;
  clickCountDiv.innerHTML = `Yay! you clicked me this many times: ${clickCount}`;
}

let stringToChange = 'Tryber X aqui!';

const putAtX = (name) => {
  return stringToChange.replace(/x/gi, name);
}

console.log(putAtX('Bebeto'));

const skillList = ['HTML','CSS','JS','Git','Bash'];

const concatSkills = (stringToChange) => {
  skillList.sort();
  const outputSkills = `${stringToChange} Minhas cinco principais habilidades são: ${skillList}`
  return outputSkills
}

console.log(concatSkills(stringToChange));

window.onload = () => {
  const clickMe = document.querySelector('#click-me');
  clickMe.addEventListener('click', clickCounter);
};
