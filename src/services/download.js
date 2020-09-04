// note that the fs package does not exist on a normal browser
const fs = require('fs');
const electron = require('electron');
const path = require('path');

const { dialog } = electron.remote;

const data = {
  id: 0,
  nextId: 1,
  title: '',
  description: '',
};
const jsonData = JSON.stringify(data);

document
  .getElementById('mybutton')
  .addEventListener('click', async () => {
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

    fs.writeFile(file.filePath + '.json', jsonData, (err) => {
      if (err) {
        alert('Error while saving');

        return;
      }
      file.canceled
        ? alert('Operação cancelada')
        : alert('Salvo com sucesso!');
    });
  });
