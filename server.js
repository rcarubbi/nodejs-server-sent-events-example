var SSE = require('sse')
  , http = require('http')
  , server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  });
 

var sse = new SSE(server);

sse.on('connection', function (client) {


  var id = setInterval(function () {
    client.send("relogio", JSON.stringify({ horario: new Date() }));
  }, 100);
  console.log('iniciar envio');
  client.on('close', function () {
    console.log('interromper envio');
    clearInterval(id);
  })
});

server.listen(8080);