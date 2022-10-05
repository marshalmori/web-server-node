const http = require("http");

http
  .createServer((req, res) => {
    res.write("Olá Marshal");
    res.end();
  })
  .listen(8080);
