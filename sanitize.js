let fs = require("fs");

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " NAME_OF_FILE_TO_BE_CLEANED.TXT");
  process.exit(-1);
}

let INPUT_FILE = process.argv[2];

console.log("Cleaning: " + INPUT_FILE);

function stripNonAscii(str) {
  return str.replace(
    /[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g,
    ""
  );
}

function stripEmbeddedAnchors(str) {
  return str.replace(/(?:https):\/\/[\n\S/"]+/gimu, " ");
}

String.prototype.insertBeforeLastOccurrence = function(strToFind, strToInsert) {
  let n = this.lastIndexOf(strToFind);
  if (n < 0) return this.toString();
  return this.substring(0, n) + strToInsert + this.substring(n);
};

const OUTPUT_FILE = INPUT_FILE.insertBeforeLastOccurrence(".", "-cleaned");

function readFile(srcPath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(srcPath, "utf8", function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(savPath, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(savPath, data, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

readFile("./" + INPUT_FILE)
  .then(function(results) {
    let cleaned = stripEmbeddedAnchors(stripNonAscii(results));
    return writeFile("./" + OUTPUT_FILE, cleaned);
  })
  .then(function() {
    console.log("Cleaned file:", OUTPUT_FILE);
  });
