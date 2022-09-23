/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
// function isPalindrome(x: number): boolean {

//   // 1. 负数不是回文数
//   // 2. 个位数为0 的数不是回文数
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
//     return false
//   }

//   let s = String(x)
//   let res = ''
//   // 字符串反转 
//   for (let i = s.length - 1; i >= 0; i--) {
//     res = res + s[i]
//   }
//   // console.log(res, s)
//   return res === s

// };



function isPalindrome(x: number): boolean {

  // 1. 负数不是回文数
  // 2. 个位数为0 的数不是回文数
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  // 使用 获取到余数的解法 
  let res = 0
  while (x > res) {
    res = res * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return res === x || x === Math.floor(res / 10)

};

/*
    例：x = 12321
     - 利用取余 % 可以得到个位数数字
     - reversedNumber = reversedNumber * 10 + (x % 10) 获取反转后的后半部数字
     - x = Math.floor(x / 10) 继续取下一个个位数

    当长度是奇数时：
        reversedNumber = 0 * 10 + (12321 % 10) = 1
        x = Math.floor(12321 / 10) = 1232

        reversedNumber = 1 * 10 + (1232 % 10) = 12
        x = Math.floor(1232 / 10) = 123

        reversedNumber = 12 * 10 + (123 % 10) = 123
        x = Math.floor(123 / 10) = 12

        x > reversedNumber 不成立退出循环

    --------------------------------------------------------------------------

    当长度是偶数时：
        x = 123321
        reversedNumber = 0 * 10 + (123321 % 10) = 1
        x = Math.floor(123321 / 10) = 12332

        reversedNumber = 1 * 10 + (12332 % 10) = 12
        x = Math.floor(12332 / 10) = 1233

        reversedNumber = 12 * 10 + (1233 % 10) = 123
        x = Math.floor(1233 / 10) = 123

        x > reversedNumber 不成立退出循环
*/
// @lc code=end

