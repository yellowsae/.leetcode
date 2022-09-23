/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start

// 滑动窗口概念 
function lengthOfLongestSubstring(s: string): number {

  // 双指针 - 滑动窗口的大小 
  let l: number = 0;

  // 滑动窗口的大小
  let res: number = 0

  let map = new Map()

  for (let r = 0; r < s.length; r++) {

    // 如果 map 中存在 s[r]
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      // 更新 l -> l 移动到 相同字符的下一个位置
      l = map.get(s[r]) + 1
    }

    // 滑动窗口大小的变化 
    res = Math.max(res, r - l + 1)

    // s[r] 存入 map
    map.set(s[r], r)
  }


  return res

};
// @lc code=end

