const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    res.write("Ola Marshal");
    res.end();
  })
  .listen(8080);

console.log("Server running at 8080 port");
