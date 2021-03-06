function stateListGenerator() {
  const stateList = ['AC','AL','AM','AP','BA','DF','CE','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RN','RJ','RO','RR','RS','SC','SE','SP','TO'];
  const selectStates = document.querySelector('#state');
  for (let index = 0; index < stateList.length; index += 1) {
    const option = document.createElement('option');
    option.value = stateList[index];
    option.innerText = stateList[index];
    if (stateList[index] === 'SP') {
      option.selected = true;
    }
    selectStates.appendChild(option);
  }
}

function submitButtonFunction(evt) {
  evt.preventDefault();
}

function implementPikaday() {
  var picker = new Pikaday({ field: document.querySelector('#role-start-date'),
    format: 'DD/MM/YYYY',
    toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  });
}

window.onload = function () {
  stateListGenerator();
  const submitButton = document.querySelector('#submit-button');
  submitButton.addEventListener('click', submitButtonFunction);
  implementPikaday();
};
