/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
// function sortArray(nums: number[]): number[] {
//   直接使用 sort 排序
//   return nums.sort((a, b) => a - b);
// };





// // 插入排序
// function sortArray(nums: number[]): number[] {
//   for (let i = 1; i < nums.length; i++) {
//     let temp = nums[i];
//     let j = i
//     while (j > 0) {
//       // 判断大小
//       if (nums[j - 1] > temp) {
//         // 替换
//         nums[j] = nums[j - 1];
//       } else {
//         break
//       }
//       j--
//     }
//     // 替换
//     nums[j] = temp;
//   }
//   return nums;
// };


// 并归排序
function sortArray(nums: number[]): number[] {
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let orderLeft = mergeSort(left)
    let orderRight = mergeSort(right)
    let res: number[] = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  return mergeSort(nums);
}
// @lc code=end

