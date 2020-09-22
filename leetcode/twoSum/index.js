// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 判断是否为数组和数组长度是否为0 ， 
    if(!Array.isArray(nums) || nums.length === 0) return 0;
    const temp = {}, len = nums.length;
    for(let i = 0; i<len; i++) {
        // 将数组中的每个值减去和 存入对象
        temp[ target - nums[i] ] = i;
    }
    for(let i = 0; i<len; i++) {
      const nextIndex = temp[nums[i]];
      // 得到符合条件的数字下标， 并且判断是否是数字本身
      if(nextIndex !== undefined && nextIndex !== i) return [i, nextIndex]
      return 0;
    }
};
// const nums = [2,7,11,15];
// const result  = twoSum(nums, 9);
// console.log(result);

