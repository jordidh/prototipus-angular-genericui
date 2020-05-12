/**
 * Servidor per servir contingut estàtic
 * Es posa l'angular generat a la mateixa carpeta que el servidor i s'executa el servidor
 * $ npm start
 * 
 */

var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8080);

console.log('listen at 8080');