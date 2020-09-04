const electron = require('electron');
const path = require('path');

const { app } = electron;
const { BrowserWindow } = electron;

require('electron-reload')(
  [__dirname, path.join(__dirname, '../public')],
  {
    electron: path.join(
      __dirname,
      '../node_modules',
      '.bin',
      'electron'
    ),
  }
);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 710,
    height: 700,
    x: 0,
    y: 0,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
