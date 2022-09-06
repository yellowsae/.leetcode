/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 广度优先遍历 
/**
 * 解题步骤： 
 *  1. 广度优先遍历 
 *  2. 记录节点的层级，把当前节点层级以数组下标 push 到 res
 */
// var levelOrder = function (root) {
//   if (!root) return [];

//   // 1. 定义队列，并把 root 入队 
//   // 6. 添加层级 
//   const queue = [[root, 0]];
//   const res = []
//   // 2. 遍历 
//   while (queue.length) {
//     // 3. 取值 
//     const [n, level] = queue.shift();

//     // 4. 访问 
//     // console.log(n.val, level)
//     // 7. 增加判断，根据层级 push 到 res
//     if (!res[level]) {
//       // 当 res[0] 为空时， 表示初始化
//       // push  [n.val] 到  第0 层 
//       res.push([n.val]);
//     } else {
//       // else 表示 不是初始化， 具有子节点 
//       // push  [n.val] 到  第 level层
//       res[level].push([n.val]);
//     }

//     // 5. 如果有子节点, 把子节入队 
//     if (n.left) queue.push([n.left, level + 1])
//     if (n.right) queue.push([n.right, level + 1])
//   }
//   return res
// };



// 另一种方法 -> 优化 
// 直接 根据 队列 元素，为每一层的元素 
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = []
  while (queue.length) {
    //1. 当前队列的元素
    let len = queue.length

    // 2.每一次循环，push 一个 []
    res.push([])
    // 3. 循环 
    while (len--) {
      // 此时取出来的 节点 都是属于同一层级
      const n = queue.shift();
      // 4. push 到 res 
      res[res.length - 1].push(n.val)

      // 子节点 继续入队 
      if (n.left) queue.push(n.left)
      if (n.right) queue.push(n.right)
    }
  }
  return res
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end
