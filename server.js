//web服务器
var http = require('http');
var fs = require('fs');
//创建一个服务器赋值给server变量
// var server = http.createServer(function(request, response) {
//   console.log('Request received');
//   response.writeHead(200, {'Content-Type': 'text/plain'});//传了个文本给浏览器
//   // response.write('hello from out pplication');
//   response.end('hello from out plication');
// })

//纯文本
// var onRequest = function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello word');
// } 

//web服务器响应json
// var onRequest = function(request, response) {
//   response.writeHead(200, {'Content-Type': 'application/json'});
//   var myObj = {
//     name: 'hfpp2012',
//     job: 'programmer',
//     age: 27
//   }
//   response.end(JSON.stringify(myObj));
// } 

//web服务器响应html
var onRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  // var htmlFile = '<!DOCTYPE html>' +
  // '<html lang="en">' +
  
  // '<head>' +
  //     '<meta charset="UTF-8">' +
  //     '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  //     '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  //     '<title>Document</title>' +
  // '</head>' +
  
  // '<body>' +
  
  // '</body>' +
  
  // '</html>'
  // response.end(htmlFile);
  
  //使用流来读取文件， 写文件
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
}

var server = http.createServer(onRequest);

//监听端口
server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000')
