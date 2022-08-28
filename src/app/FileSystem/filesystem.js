const dir = require('node-dir');
const fs = require("fs");

/**
 * Create a folder
 * @param {string} path path to create
 * @returns null
 */
const createFolder = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      fs.mkdirSync(path, { recursive: true });
      resolve();
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * Validate if a file exists
 * @param {string} path path to validate
 * @returns boolean
 */
const exists = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      let exists = fs.existsSync(path);
      resolve(exists);
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * Read data from file
 * @param {string} path path file to read
 * @returns data readed
 */
const readFile = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      let data = fs.readFileSync(path);
      resolve(data);
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * Create a file or write data in it
 * @param {*} path path to save file
 * @param {*} data data to save
 * @returns null
 */
const writeFile = (path, data) => {
  return new Promise((resolve, rejects) => {
    try {
      fs.writeFileSync(path, data);
      resolve();
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * List files in a folder
 * @param {string} path path to list directory
 * @returns array of files
 */
const listFiles = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      let files = fs.readdirSync(path);
      resolve(files);
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * Get information of a file
 * @param {*} path path to get info
 * @returns object with info
 */
const infoFile = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      let info = fs.statSync(path);
      resolve(info);
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * Remove recursively a folder
 * @param {*} path path to remove folder
 * @returns null
 */
const deleteFolder = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      fs.rmdirSync(path, { recursive: true });
      resolve();
    } catch (error) {
      rejects(error);
    }
  });
}

/**
 * Remove a file
 * @param {*} path path to remove file
 * @returns null
 */
const deleteFile = (path) => {
  return new Promise((resolve, rejects) => {
    try {
      fs.unlinkSync(path);
      resolve();
    } catch (error) {
      rejects(error);
    }
  });
}



dir.files("C:/Users/maizo/AppData/Local/osu!/Songs", "file", function (err, files) {
  if (err) throw err;
  files = files.filter(function (file) {
    return /^.*.(WAV|AIFF|FLAC|M4A|MP3|ALAC|OGG|AAC|WMA|Opus)$/i.test(file);
  });
});


module.exports = fileSystem = {
  createFolder,
  exists,
  readFile,
  listFiles,
  deleteFile,
  writeFile,
  infoFile,
  deleteFolder,
};


