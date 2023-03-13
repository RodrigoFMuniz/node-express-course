const fs = require('fs');

function retrieveData(path, contentType) {
  const file = fs.readFileSync(path);
  return { file, contentType };
}

module.exports = { retrieveData };
