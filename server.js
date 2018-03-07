var SSE = require('sse')
  , express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

var sse = new SSE(server);

sse.on('connection', function(client) {
  var id = setInterval(function() {
    client.send("relogio", JSON.stringify({horario: new Date()}));
  }, 100);
  console.log('iniciar envio');
  client.on('close', function() {
    console.log('interromper envio');
    clearInterval(id);
  })
});

server.listen(8080);