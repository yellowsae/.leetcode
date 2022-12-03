/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  // 1. 复制 nums
  nums = nums.concat(nums);

  // 2. 获取 nums 的长度
  let len: number = nums.length;

  // 3 .创建一个栈, 存储下标 
  let stack: number[] = [];

  // 4. oldLen : 旧的 nums 的长度
  let oldLen: number = len / 2;

  // 5. 创建一个数组, 用来存储结果
  let ans: number[] = new Array(oldLen).fill(-1);

  // 6. 遍历 nums
  for (let i = 0; i < len; i++) {
    // 取值 
    let current: number = nums[i];

    // 7. 循环比较:  上一个 和 当前栈定元素进行相比 
    while (stack.length > 0 && current > nums[stack[stack.length - 1]]) {
      // 获取栈顶 元素 （下标）
      let topIndex: number = stack[stack.length - 1]
      // 8. 如果当前元素大于栈顶元素, 则将栈顶元素出栈, 并将当前元素赋值给栈顶元素
      ans[topIndex % oldLen] = current;
      // 9. 将栈顶元素出栈
      stack.pop();
    }
    // 10. 将当前元素的下标入栈
    stack.push(i);
  }
  return ans;
};
// @lc code=end

