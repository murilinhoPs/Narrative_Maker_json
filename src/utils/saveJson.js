var $ = require('jquery');
const serializeJSON = require('jquery-serializejson');

const AdventureData = {
  firstAdventure: [],
};

function GetFormData(event) {
  AdventureData.firstAdventure = [];
  event.preventDefault();

  const formsArray = document.querySelectorAll('#json_form_read');

  for (let form of formsArray) {
    let formToJson = $(form).serializeJSON();

    AdventureData.firstAdventure.push(formToJson);
  }

  AdventureData.firstAdventure.splice(0, 1);

  return AdventureData;
}

module.exports = GetFormData;
