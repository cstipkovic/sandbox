import http from "http";

http
  .createServer(function (req, res) {
    const qs = new URLSearchParams(req.url.split("?")[1]);

    const userName = qs.get("firstName") + " " + qs.get("lastName");
    const html =
      "<!doctype html>" +
      "<html><head><title>Hello " +
      userName +
      "</title></head>" +
      "<body><h1>Hello, " +
      userName +
      "!</h1></body></html>";

    res.end(html);
  })
  .listen(8000);
