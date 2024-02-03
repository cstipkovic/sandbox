const fs = require("fs");

fs.readFile("code.inter", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/${textReplace}/g, "replacement");

  fs.writeFile("code.js", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
