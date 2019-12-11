/**
* @description 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例:
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * @param { number[] } nums
 * @return { number }
* */

const maxSubArray2 = (nums) => {
    // 当nums数组为空时，
    if(!nums.length) throw new Error('参数错误');
    // 在每次循环结束以后，计算以改点结束的子字符串的最大和
    let result = nums[0], mid = 0;
    const len = nums.length;
    for (let i = 1; i< len; i++) {
        const item  = nums[i];
        mid = Math.max(item, item+mid);
        result = Math.max(result, mid);
    }
    return result;
};

// 此方法为上面方法的变形
const maxSubArray  = (nums) => {
    // 当nums数组为空时，
    if(!nums.length) throw new Error('参数错误');
    // result 最终返回结果， mid中间对比
    let result = nums[0], mid = 0;
    // 循环遍历数组
    for(let item of nums) {
        // 当 mid+item 的值大于item 时，证明证明mid为正数，所以两数之和必定会结果产生正影响
        // 所以改判断可以 写为 if(mid  >  0)
        if(mid + item > item) {
            mid += item;
        } else {
            // 当mid为负数时，两数之和必定会小于最大值， 所以将该元素直接赋值给中间数mid
            mid = item;
        }
        // 每次循环结束后，比较result 和 mid 的值 取最大值赋值给result
        result = Math.max(result, mid)
    }
    return result;
};
const testArr = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(testArr); // 6


/**
*
*
* */
