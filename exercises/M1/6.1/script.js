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

window.onload = function () {
  stateListGenerator();
};
