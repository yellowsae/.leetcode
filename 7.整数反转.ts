/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
// function reverse(x: number): number {
//   // 字符串反转
//   let s = String(x)
//   let t = '-'
//   let res: any = ''

//   if (x >= 0) {
//     // 字符串反转 
//     for (let i = s.length - 1; i >= 0; i--) {
//       res += s[i]
//     }
//     res = Number(res)
//     if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0
//     return res
//   } else {
//     s = s.slice(1)
//     res += t
//     for (let i = s.length - 1; i >= 0; i--) {
//       res += s[i]
//     }
//     res = Number(res)
//     if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0
//     return res
//   }
// };

function reverse(x: number): number {
  // 回文判断 
  let res = 0
  let absX = x >= 0 ? x : -x

  // absX 永远为正数
  while (absX) {
    res = res * 10 + (absX % 10) // 0   3   32   321
    absX = Math.floor(absX / 10) // 123  12  1    0
    // 判断大数 
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0
  }

  // 判断
  return x < 0 ? -res : res
};
// @lc code=end

