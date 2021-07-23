#### BOM
一. window 对象
>1. 在全局作用域中声明的对象、变量、函数、都会变成window对象的的属性和方法
```javascript
var age = 19;
var obj = {
    name: 'xxx',
},
function sayAge() {
    console.log(age);
}
console.log(window.age); // 19
console.log(window.obj.name) // xxx
window.sayAge() // 19
```
> 2. 窗口关系及框架: 如果页面中包含框架，则每个框架中都拥有自己的window对象，并且保存在frames集合中，
```javascript

```
    