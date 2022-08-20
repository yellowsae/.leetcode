/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

  // 1. 定义双指针 
  let p1 = head
  let p2 = null

  // 2. 循环 链表 
  while (p1) {
    // 3. 保存 p1.next -> 2 的值 
    const temp = p1.next

    // 4. 反转链表 
    p1.next = p2  // 1 -> null
    p2 = p1  // 移动 p2 的指针  p2 = 1 
    p1 = temp // 移动 p1 指针   p1 -> 2 
  }
  // 返回 p2
  return p2
};
// @lc code=end

