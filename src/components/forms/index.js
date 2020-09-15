// document.getElementById('add').addEventListener('click', CreateField);
const collapse = require('../src/components/collapisible/index.js');
const updateButton = require('../src/components/remove_component/index.js');

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

let narrativeCounter = 0;
let choiceCounter = 0;

function CreateNewCard(newFieldId, insertPos) {
  narrativeCounter++;
  // else choiceCounter++;

  var newField = document.getElementById(newFieldId).cloneNode(true);
  var insert_here = document.getElementById(insertPos);

  RenameNodes(newField);

  newField.style.display = 'block';

  insert_here.parentNode.insertBefore(newField, insert_here);

  collapse();
  updateButton();
}

function RenameNodes(newFields) {
  for (let field of newFields.childNodes) {
    var theName = field.id;

    if (theName !== undefined) {
      field.id = theName + narrativeCounter;
    }

    if (field.id === 'collapsible_content_' + narrativeCounter) {
      console.log(field); //[5].childNodes);

      console.log(field.childNodes[5].childNodes);
    }
  }
}

window.onload = CreateNewCard('json_form_read', 'insert_here');
