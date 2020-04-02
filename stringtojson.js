const fs = require('fs');
const readline = require('readline');
var string = "";

async function processLineByLine() {
  const fileStream = fs.createReadStream('oldstring.txt', "utf8");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  for await (const line of rl) {
    if ( line === "" ) {
      break;
    }
    string += '"' + line + '"' + " : " + '"' +  line + '"' + ",\n";
  }

  fs.appendFile('newjson.json', "{\n" + string + "}", function (err) {
    if (err) throw err;
  });

}

processLineByLine();