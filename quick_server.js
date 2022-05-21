const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt'),
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("it works\n");
}).listen(8443); 
