const { BrowserWindow, app } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow();
  mainWindow.loadFile(path.join(__dirname, "src/index.html"));
}

if (app.isReady()) {
  createWindow();
} else {
  app.addListener("ready", () => {
    createWindow();
  })
}