/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {

  // candidates 中的每个数字在每个组合中只能使用 一次 。

  // 排序
  candidates.sort((a, b) => a - b)

  const res: number[][] = [];

  let currSum = 0
  const path: number[] = [];


  const backtrack = (candidates: number[], startIndex: number) => {


    // 3. 判断 是否等于 target 
    if (currSum === target) {
      res.push([...path])
      return
    }


    // 1. 循环 

    for (let i = startIndex; i < candidates.length && currSum + candidates[i] <= target; i++) {
      // 2. 判断 是否剪枝  
      //  currSum + candidates[i] <= target 



      // 当前的值 等于 上一个的值 
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue; // 剪枝
      }


      // 添加 当前数字 到 path 
      path.push(candidates[i])

      currSum += candidates[i]

      backtrack(
        candidates,
        i + 1, //  candidates 中的每个数字在每个组合中只能使用 一次 。
      )

      // 当 target 不等时 
      path.pop()
      currSum -= candidates[i]

    }
  }

  backtrack(candidates, 0)

  return res

};
// @lc code=end

