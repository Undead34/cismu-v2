const path = require("path");
const constants = require("./constants");
/**
 * Parser path
 * @param {string} path 
*/
function parsePath(path) {
  let _path = path.split("/");
  for (let x = 0; x < _path.length; x++) {
    let t = _path[x];
    let f = t.split("<")[1]
    let d = f.split("-")
  }
}

path.parsePath = parsePath;

module.exports = path;