const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello i am guhankumar");
  }
  if (req.url === "/about") {
    res.end("Here the about page");
  }
  res.end(`
    <h1>Oops!</k1>
    <p>We are not find what you looking for</p>
    <a href="/">back home page</a>
  `);
});

server.listen(4000, () => {
  console.log("the server is running");
});
