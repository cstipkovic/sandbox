const express = require("express");
const http = require("http");
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3001;

app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
