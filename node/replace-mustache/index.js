const fs = require("fs");
const mustache = require("mustache");

const view = require("./view.json");

fs.readFile("code.inter", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const result = mustache.render(data, view);

  fs.writeFile("code.js", result, "utf8", function (err) {
    if (err) return console.log(err);
  });

  // var output = Mustache.render("{{title}} spends {{calc}}", view);
});
