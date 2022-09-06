/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */

// 递归版 
// var inorderTraversal = function (root) {
//   if (!root) return [];

//   const res = [];

//   const inorder = (n) => {
//     if (!n) return
//     // 左 
//     inorder(n.left);

//     // 根
//     // console.log(n.val);
//     res.push(n.val)

//     // 右
//     inorder(n.right);
//   }

//   inorder(root);

//   return res
// };



// 中序遍历-非递归
var inorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  let p = root
  const stack = []

  while (p || stack.length) {
    // 左
    while (p) {
      stack.push(p)
      p = p.left
    }

    // 根
    const n = stack.pop()
    // console.log(n.val)
    res.push(n.val)

    // 右
    p = n.right
  }

  return res
};
// @lc code=end

