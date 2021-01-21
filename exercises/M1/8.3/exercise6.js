
const assert = require('assert');
const { parse } = require('querystring');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const studentAverage = (students, grades) => {
  averageGrade = (index) => (grades[index].reduce((previous, current) => previous + current)) / grades[index].length;
  return students.map((value, index) => ({name: value, average: parseFloat(averageGrade(index).toFixed(1)),}))
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(students, grades), expected);