/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

// function levelOrder(root: TreeNode | null): number[][] {
//   // 广度优先遍历 -> 递归
//   if (!root) return []
//   let res: number[][] = []

//   const dfs = (n, level) => {
//     if (!n) return
//     // console.log(n.val, level)
//     if (!res[level]) {
//       // 初始 level 层
//       res[level] = [n.val]
//     } else {
//       // 已有 level 层
//       res[level].push(n.val)
//     }

//     // 左 
//     dfs(n.left, level + 1)
//     // 右 
//     dfs(n.right, level + 1)
//   }

//   dfs(root, 0)

//   return res
// };








// function levelOrder(root: TreeNode | null): number[][] {
//   // 广度优先遍历 -> 非递归 
//   if (!root) return []
//   let res: any[] = []
//   let queue: TreeNode[] = [root]

//   while (queue.length) {
//     let l = queue.length
//     // push []
//     res.push([])
//     while (l--) {
//       // 取值 
//       const n = queue.shift()
//       console.log(n.val, l)
//       // push 值 
//       res[res.length - 1].push([n.val])

//       // 左
//       if (n.left) queue.push(n.left)
//       // 右
//       if (n.right) queue.push(n.right)
//     }
//   }
//   return res
// };



function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let res: any = []
  let queue: any = [[root, 0]]

  while (queue.length) {
    const [n, l] = queue.shift()
    if (!res[l]) {  // 初始化 
      res.push([n.val])
    } else {
      res[l].push([n.val])
    }

    if (n.left) queue.push([n.left, l + 1])
    if (n.right) queue.push([n.right, l + 1])
  }
  return res
};
// @lc code=end

