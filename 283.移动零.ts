/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * 移动零 循环 + 截取元素 + 末尾补零
 * @param nums nums
 */
// function moveZeroes(nums: number[]): void {
//   const length: number = nums.length;
//   if (length === 0) return;

//   let zeroLength: number = 0;
//   for (let i = 0; i < length - zeroLength; i++) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i, 1);
//       i--; // 截取了一个元素， i 需要减一 ， 否则连续 0 就会有报错
//       zeroLength++;
//     }
//   }
// };



/**
 * 双指针 解法
 */
function moveZeroes(nums: number[]): void {
  const length: number = nums.length;
  if (length === 0) return;
  let j: number = 0;
  let i: number;

  for (i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      const tmep = nums[i];
      nums[i] = nums[j]
      nums[j] = tmep;
      j++;  // 交换完后 移动 j 指针
    }
  }
};
// @lc code=end

