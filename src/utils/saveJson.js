var $ = require('jquery');
const serializeJSON = require('jquery-serializejson');

const AdventureData = {
  firstAdventure: [],
};

function GetFormData(event) {
  AdventureData.firstAdventure = [];
  event.preventDefault();

  var formsArray = document.querySelectorAll('#json_form_read');

  for (var form of formsArray) {
    var formToJson = $(form).serializeJSON();

    AdventureData.firstAdventure.push(formToJson);
  }

  AdventureData.firstAdventure.splice(0, 1);

  return AdventureData;
}

module.exports = GetFormData;
