document
  .getElementById('mybutton')
  .addEventListener('click', getData);

function getData() {
  var nome = document.getElementById('nomeid');

  if (nome.value != '') {
    alert({
      id: 0,
      nextId: 1,
      title: '',
      description: '',
    });
  }
}
