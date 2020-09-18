// const path2 = require('path');
const addCollapse = require('../src/components/collapisible/index.js');
const updateRemoveButton = require('../src/components/remove_component/index.js');

var choice_block;
var insert_choice;

function CreateNewChoice(elm) {
  choice_block = document.getElementById('choice_block');
  var choicesNodes = elm.parentNode.childNodes[3].childNodes;

  for (let childNode of choicesNodes) {
    if (childNode.id === 'insert_choice') insert_choice = childNode;
  }

  var newChoice = choice_block.cloneNode(true);

  newChoice.style.display = 'block';

  insert_choice.parentNode.insertBefore(newChoice, insert_choice);

  addCollapse();
  updateRemoveButton();
}

module.exports = CreateNewChoice;
