/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

/**
 * 解题思路 ： 
 *  - 先找出所有的不包含重复的字符的字串
 *  - 找出长度最大的子串， 返回长度就行 
 */

/**
 * 解题步骤 
 *  - 用双指针 维护一个 滑动窗口 ，用来剪切子串 
 *  - 不断移动右指针  遇到 重复的字符， 就把左指针移动到重符的字符下一位 
 * 
 * 例如: 
 *  abcabcbb
 * 
 * 双指针 一开始都指向 a
 * - 右指针一直循环 , 并且把最长字串记录下来 
 * 
 *  
 * - res = 1 
 * -  lr  
 * -  a b c a b c b b
 * 
 * 
 * - res = 2  ： ab 
 * -  l r  
 * -  a b c a b c b b
 * 
 * 
 * - res = 3  ： abc 
 * -  l   r
 * -  a b c a b c b b
 * 
 * 
 * - res = 3  ： bca  -> 遇到重读 字符 a , 移动 l ，移动到重符的字符下一位 
 * -    l   r 
 * -  a b c a b c b b
 * 
 * 
 * - res = 3  ： cab  -> 遇到重复 字符 b , 移动 l ，移动到重符的字符下一位 
 * -      l   r 
 * -  a b c a b c b b
 * 
 * 
 * - res = 3  ： abc   -> 遇到重复 字符 c , 移动 l ，移动到重符的字符下一位 
 * -        l   r 
 * -  a b c a b c b b
 * 
 * 
 * - res = 2  ： bc   -> 遇到重读 字符 b , 移动 l ，移动到重符的字符下一位 
 * -            l r 
 * -  a b c a b c b b
 */
var lengthOfLongestSubstring = function (s) {
  // 1. 定义指针  双指针 都是 0 
  let left = 0  // 左指针

  // 定义 res 最后返回的 最长子字符的长度 
  let res = 0


  // 3. 建立一个映射表， 建立 重复字符的映射关系 
  const map = new Map()


  // 2. 循环字符串 
  // 右指针在 for 循环定义
  for (let right = 0; right < s.length; right++) {
    // 6. 判断这个映射表中是否有 重复的字符 
    if (map.has(s[right]) && map.get(s[right]) >= left) {  // 增加判断， s[right] 确定在 滑动窗口内
      // 如果有
      // 7. 移动左指针 
      left = map.get(s[right]) + 1
    }

    // 4. res 赋值  , res 赋值为 right - left + 1 -> 滑动窗口的大小
    res = Math.max(res, right - left + 1)  // 返回 res 和 滑动窗口的大小相比

    // 5. 在移动右指针时，存入映射
    // a -> 0   字符 -> 下标
    map.set(s[right], right)

  }
  // 8. 最后返回的 res 
  return res
};


/**
 * 时间复杂度： O(n)  因为有一个for 循环 
 * 空间复杂度： 代码中 有一个 Map , 需要内存的存储， 所以空间复杂度为 O(m) m 就为字符串中不重复的字符个数
 */

// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
