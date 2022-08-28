const { BrowserWindow, app, ipcMain } = require("electron");
const dir = require('node-dir');
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preloader.js")
    }
  });
  mainWindow.loadFile(path.join(__dirname, "src/index.html"));

  ipcMain.on("music", (event, data) => {
    dir.files("C:/Users/maizo/AppData/Local/osu!/Songs", "file", function (err, files) {
      if (err) throw err;
      files = files.filter(function (file) {
        return /^.*.(WAV|AIFF|FLAC|M4A|MP3|ALAC|OGG|AAC|WMA|Opus)$/i.test(file);
      });

      mainWindow.webContents.send("music", files)
    });
  });
}

if (app.isReady()) {
  createWindow();
} else {
  app.addListener("ready", () => {
    createWindow();
  })
}

