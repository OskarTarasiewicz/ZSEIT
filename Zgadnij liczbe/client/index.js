const electron = require('electron');
const { app, BrowserWindow } = electron;
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
});

