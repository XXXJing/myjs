
/**
 * @description 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 *               如果不存在最后一个单词，请返回 0 。
 *              说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 *
 * @param {string} s
 * @return {number}
 */



const lengthOfLastWord = function(s) {
    // 先判断字符串是否为空， 如果为空，则直接返回0
    if(!s) return 0;
    // 将字符串的最后一个下标赋值给end
    let end = s.length -1;
    // 清除字符串末尾的空格，如果字符串的最后的下标大于等于0 且等于 空格的话，下标就往左移
    while(end >= 0 && s[end] === ' ') {
        end --
    }
    // 下标小于0 说明不存在单词，直接返回0
    if(end < 0) return 0;
    // 切割字符串，并转化为数组
    const tempArr = s.substring(0, end+1).split(' ');
    // 取数组的最后一位元素返回元素的长度
    return tempArr[tempArr.length -1].length
};


const testStr = 'a ';
lengthOfLastWord(testStr); // 1


/**
 * note
 * 字符串的操作 substr 和 substring 的区别
 * 相同点： 两者都是切割字符串并返回被切割的字符串
 * 不同：
 *  substr
 *      substr(start[, length]) 是从开始的位置切割字符串，第二个参数表示要切割的长度
 *      @param start  required 字符串切割开始的位置 如果start为负数，则start=str.length+start。
 *      @param length 字符串切割的长度 ， 不指定长度切割至末尾 如果 length 为 0 或负数，将返回一个空字符串。
 *  substring
 *      substring(starNumber, end) 从开始的位置切割，至结束位置（不包含结束位置）
 *      @param start  required 字符串切割开始的位置 非负数
 *      @param end 字符串切割结束的位置，不包含该位置，不指定切割至末尾
 *      如果 start 与 end 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
        如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数。
        如果 start 或 end 为负数，那么它将被替换为 0。
* */
