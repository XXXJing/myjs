// 判断是否回文
var isPalindrome = function(x) {
    // 判断参数
    if(typeof x !== 'number' ) throw new Error('参数不合法');
    // 如果为负数， 则直接返回结果
    if(x < 0 ) return false;
    // 获取翻转后数字的结果
    const _x = Number(x.toString().split('').reverse().join(''));
    return x === _x;
}
console.log(isPalindrome(0));