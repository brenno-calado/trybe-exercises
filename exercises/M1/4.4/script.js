let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}
let ageMessage = console.log('@ Jogador@',player.name,player.lastName,'tem',player.age,'anos de idade');
let bestMessage = console.log('@ Jogadora',player.name,player.lastName,'foi eleita a melhor do mundo por',player.bestInTheWorld.length,'vezes');
let medalsMessage = console.log('@ Jogador@ possui',player.medals.golden,'medalhas de ouro e',player.medals.silver,'medalhas de prata');
for (let i in player) {
  console.log(i, player[i]);
}

//Tasks of day 4.4

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

function greetings(info) {
  let greetings = 'Bem vinda, ' + info.personagem;
  return greetings;
};

for (let key in info) {
console.log(info[key]);
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };

function characterComparative(characterOne,characterTwo) {
  for (let key in characterOne) {
    if (characterOne[key] === characterTwo[key]) {
      console.log('Ambos recorrentes');
    } else {
      console.log(characterOne[key] + ' e ' + characterTwo[key]);
    }
  }
};

characterComparative(info,info2);
