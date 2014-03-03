// JavaScript Document
console.log('hello app start');

/**管理加载模块方法一**/
var h=require('hello/hello');

h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();h.hello();

/***方法二：使用包(package)来管理加载模块**/
var packageDemo1=require('packageDemo');
var content=packageDemo1.create('Ivance');
console.log(content.name);
console.log(content.head);
console.log(content.body);