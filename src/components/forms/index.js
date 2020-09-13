// document.getElementById('add').addEventListener('click', CreateField);
const collapse = require('../src/components/collapisible/index.js');

function getData() {
  var nome = new FormData(document.getElementById('json_form'));

  console.log(nome.getAll());

  // if (nome.value != '') {
  //   alert({
  //     id: 0,
  //     nextId: 1,
  //     title: '',
  //     description: '',
  //   });
  // }
}

let counter = 0;

function CreateField() {
  counter++;

  var newField = document
    .getElementById('json_form_read')
    .cloneNode(true);

  newField.style.display = 'block';

  var insert_here = document.getElementById('insert_here');
  insert_here.parentNode.insertBefore(newField, insert_here);

  //GetCollapsibles();
  collapse();
}

window.onload = CreateField;
