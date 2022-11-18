/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  // 二分搜索 
  let low = 1  // 最小范围 
  let high = n // 最大范围

  // 循环 
  while (low <= high) {
    // 中间值 
    let mid = Math.floor((low + high) / 2)

    // 调用 guess 取 猜测的值 
    let res = guess(mid)

    // 判断 
    if (res === 0) {
      return mid
    } else if (res === 1) {
      // 猜大了 -> 二分 
      low = mid + 1
    } else {
      // 猜小了 -> 二分 
      high = mid - 1
    }
  }
};
// @lc code=end

