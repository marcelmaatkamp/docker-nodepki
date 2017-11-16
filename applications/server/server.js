const https = require("https");
const fs = require("fs");

var servername = process.env.SERVERNAME;

const options = {
  key: fs.readFileSync("/certs/"+servername+"/domain.key"),
  cert: fs.readFileSync("/certs/"+servername+"/signed.crt"),
  ca: fs.readFileSync("/certs/"+servername+"/cacert.crt")
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(443);
