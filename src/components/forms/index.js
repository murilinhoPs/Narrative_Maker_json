// document.getElementById('add').addEventListener('click', CreateField);

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

let counter = 0;

function CreateField() {
  counter++;

  var newField = document
    .getElementById('json_form_read')
    .cloneNode(true);

  newField.style.display = 'block';

  var insert_here = document.getElementById('insert_here');
  insert_here.parentNode.insertBefore(newField, insert_here);

  // GetCollapsibles();
}

window.onload = CreateField;

// function GetCollapsibles() {
let collapisible = document.getElementsByClassName('collapsible');
var i;
// console.log(collapisible);

for (i = 0; i < collapisible.length; i++) {
  var button = collapisible[i].firstElementChild;
  console.log(button);

  var collContent = collapisible[i].nextElementSibling;

  button.addEventListener('click', () => {
    console.log('Teste');

    if (collContent.style.display === 'block') {
      collContent.style.display = 'none';
    } else collContent.style.display = 'block';
  });
}

// function showOrHide(collContent) {
//   console.log('Teste');
// }

// }
