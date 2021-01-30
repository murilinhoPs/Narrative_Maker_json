// note that the fs package does not exist on a normal browser
const fs = require('fs');
const electron = require('electron');
const path = require('path');
const { dialog } = electron.remote;
const getFormData = require('../src/utils/saveJson.js');

document.getElementById('mybutton').addEventListener('click', async (event) => {
  const adventureData = getFormData(event);

  const jsonData = JSON.stringify(adventureData);
  console.log(jsonData);

  const file = await dialog.showSaveDialog({
    title: 'Save',
    defaultPath: path.join(__dirname, '../assets/arquivo'),
    filters: [
      {
        name: 'JSON',
        extensions: ['json'],
      },
    ],
  });

  fs.writeFile(file.filePath + '.json', jsonData, (error) => {
    if (error) {
      alert('Error while saving');
      return;
    }
    file.canceled ? alert('Operação cancelada') : alert('Salvo com sucesso!');
  });
});
