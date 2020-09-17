// document.getElementById('add').addEventListener('click', CreateField);

const collapse = require('../src/components/collapisible/index.js');
const createChoice = require('../src/components/choices/index.js');
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

  // RenameNodes(newField);

  newField.style.display = 'block';

  insert_here.parentNode.insertBefore(newField, insert_here);

  collapse();
  updateButton();

  // var btnAddChoice = document.getElementById('add_choice');
  // // createChoice(btnAddChoice);
}

// function RenameNodes(newFields) {
//   for (let field of newFields.childNodes) {
//     var theName = field.id;

//     if (theName) {
//       field.id = theName + narrativeCounter;
//     }
//   }
// }

window.onload = CreateNewCard('json_form_read', 'insert_here');
