const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderArray = oddsAndEvens => {
  oddsAndEvens.sort(function(a, b){return a - b});
}

orderArray(oddsAndEvens);

console.log(oddsAndEvens);