/**
 * 1. 原型链继承
 *
 *
 * */

function SuperType() {
    this.name = 'xieJiang';
}

SuperType.prototype.getName = function () {
    return this.name;
}

function SubType() {
    this.sex = 'man'
}

SubType.prototype = new SuperType();
/*
* 添加原型链继承时，添加原型属性方法必须放在 new 后面，
* 使用字面量创建原型方法会破坏之前的原型链。
* */
SubType.prototype.getSex = function () {
    return this.sex;
}

const instance = new SubType();

console.log(instance.getName());
console.log(instance.getSex());

/** 原型链继承存在的问题 */

// 1. 父类中中包含引用值时， 会在子类的所有实例中共享。 原先的实例属性会变成原型属性
function Colour() {
    this.colour = ['yellow', 'blue', 'res']
}

function NewColor() {
}

NewColor.prototype = new Colour();

let colour_1 = new NewColor();
let colour_2 = new NewColor();

colour_1.colour.push('black');

console.log(colour_1.colour); // ['yellow', 'blue', 'res', 'black']
console.log(colour_2.colour); // ['yellow', 'blue', 'res', 'black']

// 2. 子类在实例化过程中不能给父类传递参数 ， 即 无法在不影响所有对象实例的情况下把参数传进父类构造函数中在加上原型链引用值的问题，
// 原型链继承基本不会单独使用。


/**
 *   2. 盗用构造函数 也称之为 “经典继承” ： 在子类构造函数中调用父类构造函数
 *  存在问题： 1. 必须在构造函数中定义方法，函数无法重用。 子类无法访问父类原型上定义的方法
 * */

function Colour_2 () {
    this.colours = ['yellow', 'blue', 'res']
}

Colour_2.prototype.getColour = function () {
    return this.colours;
}

function NewColour_2() {
    Colour_2.apply(this)
}

const colour_3 = new NewColour_2()
const colour_4 = new NewColour_2()

colour_3.colours.push('black');

console.log(colour_3.colours);  // ['yellow', 'blue', 'res', 'black']
console.log(colour_4.colours);  // ['yellow', 'blue', 'res']
// console.log(colour_3.getColour()) //  colour_3.getColour is not a function


/**
 *  3. 组合继承。 组合继承使用了原型链继承喝经典继承的优点
 * */


function SuperClass (name) {
    this.name = name;
    this.colour = ['yellow', 'blue', 'res']
}

SuperClass.prototype.getName = function() {
    return this.name;
}

function SubClass (name, age) {
    SuperClass.call(this, name);
    this.age = age
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getAge = function () {
    return this.age
};


const person_1 = new SubClass('xiejing', 18);
const person_2 = new SubClass('xiaoyaqian', 11);

person_1.colour.push('black');

console.log(person_1.colour);
console.log(person_1.getAge());
console.log(person_1.getName());

console.log(person_2.colour);
console.log(person_2.getAge());
console.log(person_2.getName());


/**
 *  4. 原型式继承。   -> 创建一个临时构造函数， 将对象赋值给这个构造函数的原型。然后返回这个构造函数的实例。
 *                      本质上是对object 的一次浅复制。
 *      es5  Object.create()  方法将原型式继承的概念规范化了。 实现效果与object 一致
 * */

function object(o) {
    function F () {};
    F.prototype = o;
    return new F();
}

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
}

let anOtherPerson = object(person);
anOtherPerson.name = 'MrX';
anOtherPerson.friends.push('huGe');

let yetAnOtherPerson = object(person);
yetAnOtherPerson.name = 'penYuYan'
yetAnOtherPerson.friends.push('liMinHao');

console.log(person);
console.log(anOtherPerson.friends);
console.log(yetAnOtherPerson.friends)


/**  5. 寄生式组合继承
 *
 * */
