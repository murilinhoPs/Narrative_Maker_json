const $ = require('jquery');
const serializeJSON = require('jquery-serializejson');

const data = {
  id: 0,
  nextId: 1,
  title: '',
  description: '',
};

function GetFormData(e) {
  e.preventDefault();

  var formsArray = document.querySelectorAll('#json_form_read');

  var selectedForm = $(formsArray[1]);

  var formToJson = selectedForm.serializeJSON();

  console.log(formToJson);
}
