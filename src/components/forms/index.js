const collapse = require('../src/components/collapisible/index.js');
const updateButton = require('../src/components/remove_component/index.js');
var $ = require('jquery');
var populate = require('populate.js');
const myPopulate = require('../src/utils/jsonDataToForm');

function getJsonData() {
  var data = {
    firstAdventure: [
      {
        title: 'Narrativa 1',
        id: 1,
        text: 'Descrição da narrativa 1',
        options: [
          { index: 0, nextText: 2, text: 'Escrever a escolha' },
          { index: 1, nextText: 3, text: 'Escolha...' },
        ],
      },
      {
        title: 'Narrativa2 ',
        id: 2,
        text: 'Descrição da narrativa 2',
        options: [{ index: 2, nextText: 1, text: 'dsadadd' }],
      },
    ],
  };

  var formsArray = document.querySelectorAll('#json_form_read');
  console.log(formsArray);

  for (var i = 0; i <= formsArray.length + 1; i++) {
    myPopulate(formsArray[i], data.firstAdventure[i - 1]);
  }
}

let narrativeCounter = 0;

function CreateNewCard(newFieldId, insertPos) {
  narrativeCounter++;

  var newField = document.getElementById(newFieldId).cloneNode(true);
  var insert_here = document.getElementById(insertPos);

  newField.style.display = 'block';

  insert_here.parentNode.insertBefore(newField, insert_here);

  collapse();
  updateButton();
  getJsonData();
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
