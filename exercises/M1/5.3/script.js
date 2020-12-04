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

// Escreva seu código abaixo.

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
