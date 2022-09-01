/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */

/**
 * 使用树的广度优先遍历 
 * 
 */


/**
    使用：树的广度优先遍历
    解题思路：
        1. 求最小深度， 考虑使用广度优先遍历 
        2. 在广度优先遍历过程中， 遇到叶子节点，停止遍历， 返回节点层级 
            - 这样直接能够获取到最小的， 不需要遍历之后的节点了

    解题步骤： 
        1. 广度优先遍历整棵树， 并记录每个节点的层级 
        2. 遇到叶子节点， 返回节点的层级，停止遍历 
 */
var minDepth = function (root) {
  if (!root) return 0;

  // 1. 定义队列 , 并把 root 放入
  // 6. 增加 最小深度 1 
  let queue = [[root, 1]]

  // 2. 循环遍历 
  while (queue.length) {
    // 3. 取出队头节点 
    // 取出 最小深度 l
    const [n, l] = queue.shift()

    // 4. 访问 
    // console.log(n.val, l)
    // 7. 增加判断， 当遇到子节点空情况下，说明是最小深度了 
    if (!n.left && !n.right) {
      // 当 左节点 和 右节点 为空 时，返回 l 
      return l
    }

    // 5. 判断是否具有 子节点
    // 添加最小深度 l + 1
    if (n.left) queue.push([n.left, l + 1])
    if (n.right) queue.push([n.right, l + 1])
  }

};
// @lc code=end

