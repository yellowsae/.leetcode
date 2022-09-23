/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let p1: ListNode | null = head
  let p2: ListNode | null = null

  // 循环
  while (p1) {
    // 保存 p1
    const t = p1.next
    p1.next = p2
    p2 = p1
    p1 = t
  }

  return p2
};
// @lc code=end

