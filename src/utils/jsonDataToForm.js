var $ = require('jquery');

function verifyInputKey(form, key) {
  for (var elm of form.elements) {
    if (elm.name.includes(key)) return elm;
  }
}

function myPopulate(form, data) {
  $.each(data, function (key, value) {
    console.log(key + ': ' + value);

    var element =
      form.elements.namedItem(key) || verifyInputKey(form, key);

    element.value = value;
  });
}

module.exports = myPopulate;
