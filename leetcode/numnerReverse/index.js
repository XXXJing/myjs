// 整数反转
var reverse = function(x) { 
    
    
    if(typeof x !== 'number') return  new Error('参数不合法');
    // 最大和最小能输出的数
    const maxLimit = Math.pow(2, 31) - 1, minLimit = Math.pow(-2,31);
    if(x === 0) return 0;
    let result; // 保存最终结果
    // 判断数字是否发育0
    const flag = x >= 0;
    // 将数字翻转并保存在变量中
    const temp = Math.abs(x).toString().split('').reverse().join('');
    result = flag? temp*1: temp*-1
    if(result > maxLimit || result < minLimit) result = 0;
    return result;
}
/* 
toString(radix)
    radix 可选。规定表示数字的基数，使 2 ~ 36 之间的整数。
    若省略该参数，则使用基数 10。但是要注意，如果该参数是 10 以外的其他值，则 ECMAScript 标准允许实现返回任意值。
*/
console.log(reverse(1534236469))

