// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!Array.isArray(nums) || nums.length === 0) return 0;
    const temp = {}, len = nums.length;
    for(let i = 0; i<len; i++) {
        temp[ target - nums[i] ] = i;
    }
    for(let i = 0; i<len; i++) {
      const nextIndex = temp[nums[i]];
      if(nextIndex !== undefined && nextIndex !== i) return [i, nextIndex]
      return [];
    }
};
const nums = [2,7,11,15];
const result  = twoSum(nums, 9);
console.log(result);