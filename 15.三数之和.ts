/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];

  // 1. 排序 
  nums.sort((a, b) => a - b);

  // 2. 遍历
  for (let i = 0; i < nums.length - 2; i++) {

    // 3. 确认什么时候进行循环 当 nums[i] 和 它的 上一个数 相等时，跳过
    if (i === 0 || nums[i] !== nums[i - 1]) {
      //  定义双指针 
      let start = i + 1
      let end = nums.length - 1
      // 3.2 当开始指针 小于 结束指针时 进行 while 循环判断 
      while (start < end) {
        // 有三种情况 
        // 3.2.1 当三个数的和 等于 0 时，将结果存入 result 中
        if (start < end && nums[i] + nums[start] + nums[end] === 0) {
          // 添加到 result 中
          result.push([nums[i], nums[start], nums[end]])

          // 4. 移动指针
          start++
          end--

          // 5. 去重
          while (start < end && nums[start] === nums[start - 1]) {
            // 当 start 指针的值 和 它的上一个值 相等时，start++
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            // 当 end 指针的值 和 它的下一个值 相等时，end--
            end--
          }

        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++
        } else {
          end--
        }
      }
    }
  }
  return result;
};
// @lc code=end

