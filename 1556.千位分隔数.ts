/*
 * @lc app=leetcode.cn id=1556 lang=typescript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
function thousandSeparator(n: number): string {
  const s = n.toString();
  let res: string = ""
  for (let i = s.length - 1; i >= 0; i--) {
    const j = s.length - i;
    if (j % 3 === 0) {
      if (i === 0) {
        res = s[i] + res
      } else {
        res = "." + s[i] + res
      }
    } else {
      res = s[i] + res
    }
  }
  return res
};



function thousandSeparator2(n: number): string {
  const s = n.toString();
  const arr = s.split('').reverse();
  return arr.reduce((prev, curr, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return curr + '.' + prev
      } else {
        return curr
      }
    } else {
      return curr + prev
    }
  }, '')
};
// @lc code=end

