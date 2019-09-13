var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//创建输入流（事件的实例）
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8')
// myReadStream.setEncoding('utf8')
// var data = ""
// myReadStream.on('data', function(chunk) {
//   // data += chunk;
//   myWriteStream.write(chunk);
// })
// myReadStream.on('end', function() {
//   console.log(data)
// })

// var writeData = 'hello world';
// myWriteStream.write(writeData);
// myWriteStream.end();
// myWriteStream.on('finish', function() {
//   console.log('finished')
// })

//管道
myReadStream.pipe(myWriteStream);