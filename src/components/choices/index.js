// const collapseFun = require('../src/components/collapisible/index.js');
// const updateRemButton = require('../src/components/remove_component/index.js');

var choice_block;
var insert_choice;

function CreateNewChoice(elm) {
  // console.log(elm);
  // var elmT = document.getElementById('choice_block');
  var choicesNodes = elm.parentNode.childNodes[3].childNodes;

  console.log(choicesNodes);

  for (let childNode of choicesNodes) {
    if (childNode.id === 'choice_block') {
      choice_block = childNode;
    } else if (childNode.id === 'insert_choice')
      insert_choice = childNode;
  }

  var newChoice = choice_block.cloneNode(true);

  console.log(newChoice);
  newChoice.style.display = 'block';

  insert_choice.parentNode.insertBefore(newChoice, insert_choice);

  // collapseFun();

  // updateRemButton();
}

module.exports = CreateNewChoice;
