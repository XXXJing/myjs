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

console.log(reverse(1534236469))