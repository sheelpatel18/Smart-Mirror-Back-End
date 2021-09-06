const port = 8000;
const server = require('websocket').server;
const http = require('http');
// Spinning the http server and the websocket server.
const httpServer = http.createServer();
httpServer.listen(port);
const websocketServer = new server({
  httpServer: server
});