const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/certs/server/domain.key'),
  cert: fs.readFileSync('/certs/server/signed.crt'),
  ca: fs.readFileSync('/certs/server/chained.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(443);
