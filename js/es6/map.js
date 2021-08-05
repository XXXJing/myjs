// 使用new 和 Map 可以创建创建一个空映射
const map = new Map();
console.log(map);
/*
 *  如果想在创建时初始化实例， 可传入一个可迭代的对象，需要包含键值对数组
 * */

const map_1 = new Map([
    ['key', 'value'],
    ['key', 'value'],
    ['key', 'value'],
])
console.log(map_1.size); // 3

/*
*  初始化以后可以是同set 方法再添加键值对
* */
const map_2 = new Map();
map_2.set('firstName', '谢晶')
map_2.get('firstName') // 谢晶
map_2.delete('firstName') // 删除这一键值对
map_2.clear() // 清除所有键值对
/*
* set方法中返回map 实列因此可以吧多个操作链接起来。 map 中可以使用任何数据类型作为键,并且使用严格模式来检查键值的匹配性。
* 在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时仍然保持不变：传值引用
* */

const map_3 = new Map();
const objKey = {};
const objVal = {};
const arrKey = [];
const arrVal = [];

map_3.set(objKey, objVal);
map_3.set(arrKey, arrVal);
objKey.foo = 'foo';
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");

console.log(map_3.get(objKey)); // { bar: bar }
console.log(map_3.get(arrKey)); // ["bar"]


/*
* Map 会按顺序维护键值对的插入顺序，因此可以对插入顺序进行迭代操作。
* */

const map_4 = new Map([
    ['key', 'value'],
    ['key', 'value'],
    ['key', 'value'],
])
/**  entries 为默认的迭代器，可以直接对映射实力进行拓展操作 */
console.log(map_4.entries === map_4[Symbol.iterator]) // true

/* 如果不使用迭代器， 则可以使用forEach ，传入回调
*   forEach(cb, thisArgs) 第二个参数用于重写回调函数内部this值
*   keys()和 values()分别返回以插入顺序生成键和值的迭代器：
*  */

const map_5 = new Map([
    ['key', 'value'],
    ['key', 'value'],
    ['key', 'value'],
])

map_5.forEach((val,map) => {
    console.log(val, map);
}, map_5)
for(let item of map_5.values()) {
    console.log(item)
    // value
}

for(let item of map_5.keys()) {
    console.log(item) // key
}

// 关于map 和Object 的区别

/*
*   1. 内存占用。 相对而言， map 所占用的内存更小。
*   2. 插入性能。 不过插入 Map 在所有浏览器中一般会稍微快
                一点儿。对这两个类型来说，插入速度并不会随着键/值对数量而线性增加。如果代码涉及大量插入操
                作，那么显然 Map 的性能更佳
    3. 查找速度。 大型Object 和 map 查找速度差不多 ， 有大量查找操作使用object
*   4, 删除性能。 大量删除操作使用map
* */


/** weakMap 弱类型映射*/
/*
* 弱映射的键只能是Object或者继承自Object 尝试使用非对象设置键会抛出TypeError
* */
