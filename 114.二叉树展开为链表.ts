/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  while (root) {
    // 如果左子树为空，直接考虑下一个节点
    if (!root.left) {
      root = root.right
    } else { // 左子树有值
      // 1. 保存左子树 
      let temp: TreeNode | null = root.left

      // 2. 找到左子树最右边节点 
      while (temp.right) {
        temp = temp.right  //  保存 4 这个节点
      }

      // 4. 把 root 的右子树 接到 左子树的最右边 节点上 
      temp.right = root.right  // 4.right-> 5 -> 6  

      // 5. 把 root 的左子树 接到 root 的右子树上
      root.right = root.left

      // 6. 把 root 的左子树 置空
      root.left = null

      // 7. 考虑下一个节点
      root = root.right
      // 下一次遍历就是  把 3 节点接到 2 的右边 
    }
  }

};
// @lc code=end

