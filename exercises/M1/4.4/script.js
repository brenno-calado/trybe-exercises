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