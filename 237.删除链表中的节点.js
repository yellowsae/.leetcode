/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 思路 ： 因为只能获取 node 节点，不能获取到 head
  // 所以 把 node 赋值位 node 的下一个节点，然后删除 node 的下一个节点 
  // 4 5 1 9  -> 目标删除 1 
  // 4 5 9 9  -> 删除 最后一个 0 就行 

  // 1. node 赋值位 下一个节点 
  node.val = node.next.val

  // 2. 删除 node 的下个节点 -> node = 它下下个节点
  node.next = node.next.next

};
// @lc code=end

