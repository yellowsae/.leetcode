/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
// function wordBreak(s: string, wordDict: string[]): boolean {
//   const n: number = s.length; // 字符串长度 
//   let dp: boolean[] = new Array(n + 1).fill(false);  // 定义数组，长度 n - 1 ; 使用 false 进行填充
//   dp[0] = true;  // 第0个 为 true : "" 空字符

//   // 循环 
//   for (let i = 1; i <= n; i++) {
//     // 内循环
//     for (let j = 0; j < i; j++) {
//       // 判断  dp[j]=>le   *&7 并且 e  在字典中出现过, 说明 lee 在自字典中有 
//       if (dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1) {
//         dp[i] = true
//         break
//       }
//     }
//   }

//   // 返回 最后 dp[n]
//   return dp[n]
// };



/**
    解决问题：使用直观的思考怎么解决， （暴力破解） 
        - 在考虑怎么优化，或者换个角度思考 


    s    dict  - 暴力破解： n^1000  - pass

    另一种思路：
        leetcode   dict{}
            - lee   可以由 dict{} 中的某几个词拼出来
                - 分
                l + ee :  可以由 dict{} 中的某几个词拼出来
                le + e
                lee + "" 

            - tcode  可以由 dict{} 中的某几个词拼出来

        dp[i] = ? 能否由 dict 拼接出来 
            - 例如：lee
                dp[3] = 从 dict 中找出来 : 满足公式：for (j in [i - 1])  {dp[j] && dict[j - i]}
                            -   dict[j - i]   => dp[i] 个单词在dict中出现 说明有，而且找到 
                    "" + lee
                    l + ee
                    le + e
                    
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const n: number = s.length;  // 字符串长度 
  let dp: boolean[] = new Array(n + 1).fill(false) // 创建一个数组, 长度n -1，使用 false 进行填充 
  dp[0] = true  // 第0个: "" 肯定为 true

  // 双指针  i j  遍历 s 
  for (let i = 1; i <= n; i++) { // i 从 1 开始
    // 另一个维度 
    for (let j = 0; j < i; j++) {
      /**
          leetcode 
             i = 3 => lee
            j = 2  => le 
          得到字符： le    
       */
      //  判断 ——>  判断  dp[j]=>le   *&7 并且 e  在字典中出现过, 说明 lee 在自字典中有 
      if (dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1) {// s.slice(j, i) 截取 j => i 中的e 
        dp[i] = true
        break  // 停止  当前的循环 , i++
      }
    }
  }
  return dp[n]
};
// @lc code=end

