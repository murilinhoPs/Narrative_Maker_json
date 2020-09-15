const collapseFun = require('../src/components/collapisible/index.js');

var choice_block; //= choicesNodes[3];
var insert_choice; //= choicesNodes[7];

function CreateNewChoice(elm) {
  var elmT = document.getElementById('choice_block');

  console.log(elm.parentNode);

  var choicesNodes = elm.parentNode.childNodes;

  for (let childNode of choicesNodes) {
    if (childNode.id === 'choice_block') {
      choice_block = childNode;
    } else if (childNode.id === 'insert_choice')
      insert_choice = childNode;
  }

  var newChoice = choice_block.cloneNode(true);

  insert_choice.parentNode.insertBefore(newChoice, insert_choice);

  collapseFun();
}
