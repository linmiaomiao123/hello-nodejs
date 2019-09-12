// 回调函数
// function callFunction(fun, name) {
//   fun(name);
// }

// callFunction(function(name) {
//   console.log(name + " Bye")
// }, "rails365")

// 模块 （结合counter.js一起使用）
// var stuff = require('./count')
// console.log(stuff.counter(['ruby', 'nodejs', 'react']));
// console.log(stuff.adder(3, 2));
// console.log(stuff.pi);

//事件
var events = require('events');
var util = require('util');//工具库
var Person = function(name) {
  this.name = name
}
util.inherits(Person, events.EventEmitter);
var xiaoming = new Person('xiaoming');
var lili = new Person('lili');
var lucy = new Person('lucy');
var person = [xiaoming, lili, lucy];
console.log(person)
person.forEach(function(person) {
  person.on('speak', function(message) {
    console.log(person.name + ' said: ' + message);
  })
})
xiaoming.emit('speak', 'hi');
lucy.emit('speak', 'I want a curry');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(message){
//   console.log(message);
// })
// myEmitter.emit('someEvent', ' the event was emitted');
