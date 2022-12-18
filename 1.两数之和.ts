/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * Map 字典解法
 * @param nums 
 * @param target 
 * @returns {number[]}
 */
// function twoSum(nums: number[], target: number): number[] {


//   let map = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     let t = target - nums[i]

//     // 如果 map 中存在 t
//     if (map.has(t)) {
//       return [map.get(t), i]
//     }

//     // 把 nums[i] 存入 map 中
//     map.set(nums[i], i)
//   }

// };

/**
 * 暴力解法
 */
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

/**
 * 对象解法 
 */
// function twoSum(nums: number[], target: number): number[] {
//   let obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     let t = target - nums[i]

//     // 如果 obj 中存在 t
//     if (obj[t] !== undefined) {
//       return [obj[t], i]
//     }

//     // 把 nums[i] 存入 obj 中
//     obj[nums[i]] = i
//   }
// }

/**
 * 双指针解法
 */
function twoSum(nums: number[], target: number): number[] {
  let res: number[] = []
  const copyNums: number[] = Array.from(nums).sort((a, b) => a - b)
  let left = 0
  let right = copyNums.length - 1
  while (left < right) {
    const n1 = copyNums[left]
    const n2 = copyNums[right]
    const sum = n1 + n2
    if (sum === target) {
      res.push(nums.indexOf(n1), nums.lastIndexOf(n2))
      break
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return res
}
// @lc code=end

