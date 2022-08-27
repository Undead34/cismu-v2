const { app } = require("electron");

let appdata = app.getPath("appData");

const appMetadata = {
  name: "Cismu Player",
  machineName: "cismu-player",
  version: "0.0.1",
  build: "0000"
}

const paths = {
  root: appdata,
  home: "appdata/<name>",
  firstRun: "<home>/.FirstRun",
}

module.exports = {
  paths,
  appMetadata
}