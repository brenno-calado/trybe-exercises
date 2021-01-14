const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const turno = 'turno';
const manha = 'manha';

const changeSchedule = (object, key, value) => object[key] = value;
changeSchedule(lesson2, turno, manha);

const listKeys = object => Object.keys(object);
const objectSize = object => listKeys(object).length;
const listValues = object => Object.values(object);
const allLessons = {};
const mergeLessons = () => Object.assign(allLessons, {lesson1,lesson2,lesson3});
mergeLessons();
const sumStudents = () => {
  let sum = 0;
  for (let i in allLessons) {
    sum += allLessons[i].numeroEstudantes
  }
  return sum;
};
const getValueByNumber = (object, key) => Object.values(object)[key];
const verifyPair = (object, key, value) => {
  const entriesArray = Object.entries(object);
  for (let i in entriesArray) {
    if(entriesArray[i][0] === key && entriesArray[i][1] === value) {
      return true
    }
  }
  return false
};
console.log(verifyPair(lesson2, 'numeroEstudantes', 10));