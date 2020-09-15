function CreateNewChoice(newFieldId, insertPos) {
  let newFields = document.getElementsByClassName(newFieldId);

  //.cloneNode(true);
  let inserts_here = document.getElementsByClassName(insertPos);

  for (let newField of newFields) {
    // btnElm.addEventListener('click', RemoveElm);
  }

  console.log(newFields);
  console.log(inserts_here);

  // newField.style.display = 'block';

  // insert_here.parentNode.insertBefore(newField, insert_here);
}
