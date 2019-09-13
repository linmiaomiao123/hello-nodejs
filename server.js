//web服务器
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

function startServer(route, handle) {
  var onRequest = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request received' + pathname);
    //获取get请求
    // var params = url.parse(request.url, true).query;//true返回对象 url地址后边的请求参数
    // route(handle, pathname, response, params);
    //获取post请求
    // var data = '';
    var data = [];
    request.on('error', function(err) {
      console.error(error)
    }).on('data', function(chunk) {
      // data += chunk;
      data.push(chunk);
    }).on('end', function() {
      if (request.method === 'POST') {
        if (data.length > le6) {
          request.connection.destory();
        }
        data = Buffer.concat(data).toString();
        route(handle, pathname, response, querystring.parse(data));
      } else {
        var params = url.parse(request.url, true).query;//true返回对象 url地址后边的请求参数
        route(handle, pathname, response, params);
      }
      
    })
  }
  
  var server = http.createServer(onRequest);
  
  //监听端口
  server.listen(3000, '127.0.0.1');
  console.log('Server started on localhost port 3000')
  
}

module.exports.startServer = startServer;