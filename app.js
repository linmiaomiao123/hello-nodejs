var fs = require('fs');
// fs.unlinkSync('writeMe.txt')//同步
// fs.writeFileSync('writeMe.txt', 'Hello word')
// fs.unlink('writeMe.txt', function() {
//   console.log('delete writeMe.txt file')
// })
// fs.mkdirSync('stuff')//新建目录
// fs.rmdirSync('stuff')//删除目录

//潜逃很深的话， 容易引起地狱回调
fs.mkdir('stuff', function() {
  fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('./stuff/writeMe.txt', data, function() {
      console.log('copy successfully')
    })
  })
})