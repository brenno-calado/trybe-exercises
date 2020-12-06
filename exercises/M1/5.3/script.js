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

function createDezDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dayList = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dezDays = dezDaysList[index];
    dezDayListItem = document.createElement('li');
    dezDayListItem.innerHTML = dezDays;
    dezDayListItem.className = 'day';
    if (dezDays === 4 || dezDays === 11 || dezDays === 18 || dezDays === 25) {
      dezDayListItem.className = 'day friday';
    }
    if (dezDays === 24 || dezDays === 25 || dezDays === 31) {
      dezDayListItem.className = 'day holiday';
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
let clicked = false;

function highlightHolidays() {
  let holiday = document.querySelectorAll('.holiday');
  if (clicked === false) {
    for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'rgb(238,120,120)';
    }
    clicked = true;
  } else {
    for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
    clicked = false;
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