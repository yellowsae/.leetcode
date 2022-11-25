/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
// function rob(nums: number[]): number {
//   // 动态规划 dp[i] = max(dp[i-1], dp[i-2] + nums[i])
//   if (nums.length === 0) return 0;
  
//   let dp = [0, nums[0]]  // 0 表示第0个屋子的钱， dp[1] 就是有一个屋子，钱为nums[0]
//   for (let i = 2; i <= nums.length; i++) {
//     // 根据公式
//     dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i -1])
//   }
//   // console.log(dp)
//   return dp[nums.length]
// };


// 优化 - 空间复杂度
function rob(nums: number[]): number {
  // 动态规划 dp[i] = max(dp[i-1], dp[i-2] + nums[i])
  if (nums.length === 0) return 0;
  
  let dp0 = 0
  let dp1 = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    let dp2 = Math.max(dp0 + nums[i - 1], dp1)
    dp0 = dp1
    dp1 = dp2
  }
  return dp1
};
// @lc code=end

