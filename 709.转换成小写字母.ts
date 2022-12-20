/*
 * @lc app=leetcode.cn id=709 lang=typescript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
// function toLowerCase(s: string): string {
//   return s.toLowerCase();
// };



// function toLowerCase(s: string): string {
//   let res = ""
//   const length = s.length
//   const reg = /[A-Z]/
//   for (let i = 0; i < length; i++) {
//     const char = s[i]
//     if (reg.test(char)) {
//       res += char.toLocaleLowerCase()
//     } else {
//       res += char
//     }
//   }
//   return res
// };


function toLowerCase(s: string): string {
  let res = ""
  const length = s.length
  for (let i = 0; i < length; i++) {
    const code = s.charCodeAt(i)
    // 65 - 90
    if (code >= 65 && code <= 90) {
      res += s[i].toLocaleLowerCase()
    } else {
      res += s[i]
    }
  }
  return res
};
// @lc code=end

