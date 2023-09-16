/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */


/**
 * 解题思路
1、 回溯算法
2、 path 存入每次的元素 判断数组和是否等于 target
3、 元素可重复使用 startIndex 从原地开始
4、sum += nums[i] 递增求结果元素的和
5、撤销 sum -= nums[i]
6、path.pop 撤销处理过的节点

 * 
 * @param candidates 
 * @param target 
 * @returns 
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {

  const res: number[][] = []

  let currSum = 0
  const path: number[] = []

  // 回溯 
  const backtrack = (candidates: number[], startIndex: number) => {

    // 5. 结束条件
    if (currSum > target) {
      return
    }

    // 6. 结束条件
    if (currSum === target) {
      res.push([...path])
      return
    }


    // 循环 
    for (let i = startIndex; i < candidates.length; i++) {

      // 1. 添加元素 到 path
      path.push(candidates[i])

      // 2. 求和 
      currSum = currSum + candidates[i]

      // 3. 递归
      backtrack(
        candidates,
        i,  // 重复使用元素
      )
      // 4. 不符合条件,撤销
      path.pop()
      currSum = currSum - candidates[i]

    }
  }

  backtrack(candidates, 0)

  return res
};
// @lc code=end

