
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



const containsA = (names) => {
  return names.reduce((previousValue, currentValue) => 
  `${previousValue} ${currentValue}`)
  .match(/a/gi).length;
}

assert.strictEqual(containsA(names), 20);