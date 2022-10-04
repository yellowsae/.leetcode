/*
 * @lc app=leetcode.cn id=133 lang=typescript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// function cloneGraph(node: Node | null): Node | null {
//   if (!node) return;
//   // 1. 深度优先遍历
//   const visited = new Map();
//   const dfs = (n: Node | any) => {
//     // console.log(n.val)
//     // 2. 拷贝节点
//     const nCopy: Node | any = new Node(n.val)
//     // 改 visited 为 map 存储 拷贝的节点
//     visited.set(n, nCopy);
//     (n.neighbors || []).forEach((neighbor) => {
//       if (!visited.has(neighbor)) {
//         dfs(neighbor);
//       }
//       // 3. 拷贝所有的边 
//       nCopy.neighbors.push(visited.get(neighbor))
//     });
//   }
//   dfs(node)

//   // 最后返回 拷贝的节点
//   return visited.get(node);
// };



// 使用广度优先遍历 也可以
function cloneGraph(node: Node | null): Node | null {
  if (!node) return;
  const visited = new Map();
  // 初始化， 把 node 放入 visited 中 
  // visited.set(node, true)

  // 2. 拷贝节点 -> 初始化的 node
  visited.set(node, new Node(node.val))

  // 1. 广度优先遍历 
  const q = [node]
  while (q.length) {
    const n: Node | any = q.shift();
    // console.log(n.val);
    (n.neighbors || []).forEach(neighbor => {
      if (!visited.has(neighbor)) {
        q.push(neighbor)
        // 把添加到 q 里的 节点，存入 visited 
        // visited.set(neighbor, true)
        // 2. 拷贝邻居节点 
        visited.set(neighbor, new Node(neighbor.val))
      }


      // 3. 拷贝边 
      //  visited.get(n).neighbors : 获取到当前节点的邻居
      //  visited.get(neighbor) :  获取到边 
      visited.get(n).neighbors.push(visited.get(neighbor))
    })
  }
  return visited.get(node);
};
// @lc code=end

