// Create days of the week

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Create List of days

const dayList = document.getElementById('days');

function createDezDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dezDays = dezDaysList[index];
    let dezDayListItem = document.createElement('li');
    dezDayListItem.innerHTML = dezDays;
    dezDayListItem.className = 'day';
    if (dezDays === 4 || dezDays === 11 || dezDays === 18 || dezDays === 25) {
      dezDayListItem.classList.add('friday');
    }
    if (dezDays === 24 || dezDays === 25 || dezDays === 31) {
      dezDayListItem.classList.add('holiday');
    }
    dayList.appendChild(dezDayListItem);
  }
}
createDezDays();

// Create button for Holiday

const buttonsContainer = document.querySelector('.buttons-container');

function holidayCreate() {
  const holidayString = 'Feriado';
  let holidayButton = document.createElement('button');
  holidayButton.className = 'btn-holiday';
  holidayButton.innerText = holidayString;
  buttonsContainer.appendChild(holidayButton);
}
holidayCreate();

const holidayButton = document.querySelector('.btn-holiday');
holidayButton.addEventListener('click',highlightHolidays);
let clickHoliday = false;

function highlightHolidays() {
  let holiday = document.querySelectorAll('.holiday');
  if (clickHoliday === false) {
    for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'white';
    }
    clickHoliday = true;
  } else {
    for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
    clickHoliday = false;
  }
}

// create button for Friday

function fridayCreate() {
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = 'Sexta-feira';
  buttonsContainer.appendChild(fridayButton);
}
fridayCreate();

const fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click',highlightFridays);
let clickFriday = false;

const fridayText = [4, 11, 18, 25];
function highlightFridays() {
  let fridays = document.querySelectorAll('.friday');
  
  if (clickFriday === false) {
    for (let index = 0; index < fridays.length; index += 1) {
    fridays[index].innerText = 'Sextou! o/';
    }
    clickFriday = true;
  } else {
    for (let index = 0; index < fridays.length; index += 1) {
    fridays[index].innerText = fridayText[index];
    }
    clickFriday = false;
  }
}

// Zoom effect on day number
let daysListed = document.getElementById('days');
daysListed.addEventListener('mouseover', zoom);
daysListed.addEventListener('mouseout', zoomOff)

// Looked up event.target documentation at developer.mozilla

function zoom(evt) {
  console.log(evt.target);
  evt.target.style.fontSize = '30px';
}
function zoomOff(evt) {
  evt.target.style.fontSize = '20px';
}

let tasks = document.querySelector('.my-tasks');
let taskToAdd = 'Codar';
function addTask(taskToAdd) {
  let spanTask = document.createElement('span');
  spanTask.innerText = taskToAdd;
  tasks.appendChild(spanTask);
}
addTask(taskToAdd);

let taggingColor = 'green';

function colorTask(taggingColor) {
  let colorLegend = document.createElement('div');
  colorLegend.className = 'task';
  colorLegend.style.background = taggingColor;
  tasks.appendChild(colorLegend);
}
colorTask(taggingColor);

let colorLegend = document.querySelector('.task');
colorLegend.addEventListener('click', colorSelected);

//checked mozilla documentation on classList to use contains
function colorSelected() {
  if (colorLegend.classList.contains('selected')) {
    colorLegend.classList.remove('selected');
  } else {
    colorLegend.classList.add('selected');
  }
}

dayList.addEventListener('click', colorDay);

function colorDay(evt) {
  if (colorLegend.classList.contains('selected')) {
    if (evt.target.style.color !== taggingColor) {
    evt.target.style.color = `${taggingColor}`;
    } else {
      evt.target.style.color = 'rgb(119 , 119 , 119)';
    }
  }
} 

let commitmentList = document.querySelector('.task-list');
let inputCommitment = document.getElementById('task-input');
let addButton = document.getElementById('btn-add');
inputCommitment.addEventListener('change', addCommitment);

function addCommitment() {
  if (inputCommitment.value !== '') {
    let commitment = document.createElement('li');
    commitment.innerText = inputCommitment.value;
    commitmentList.appendChild(commitment);
  } else {
    alert('Algum texto deve ser adicionado');
  }
}

