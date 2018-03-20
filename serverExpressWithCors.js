var SSE = require('sse')
  , http = require('http');
 

  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const server = http.createServer(app);
   
  const router = express.Router();

router.get("/sse", (req, res) => {
  var client = new SSE.Client(req, res);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  client.initialize();


  var id =  setInterval(() => {
    client.send("relogio", JSON.stringify({ horario: new Date() }));
  }, 100);

  console.log('iniciar envio');
  client.on('close', function () {
    console.log('interromper envio');
    clearInterval(id);
  });

});


 
app.use("/", router);
 
server.listen(9090);