//web服务器
var http = require('http');
//创建一个服务器赋值给server变量
// var server = http.createServer(function(request, response) {
//   console.log('Request received');
//   response.writeHead(200, {'Content-Type': 'text/plain'});//传了个文本给浏览器
//   // response.write('hello from out pplication');
//   response.end('hello from out plication');
// })

var onRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello from out plication');
} 
var server = http.createServer(onRequest);

//监听端口
server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000')
