import 'dotenv/config';

import http from "http";

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer(async (req, res) => {
  try {
    console.log(1);
    res.statusCode = 200;
    res.end("Hello world!");
  } catch (e) {
    res.statusCode = 404;
    res.end(e.message);
  }
});

server.listen(port, hostname, () => {
  console.log("Server running:", port);
});

