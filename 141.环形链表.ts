/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  // 定义一个快指针和一个慢指针
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    // 移动指针 
    p1 = p1.next
    p2 = p2.next.next

    if (p1 === p2) {
      return true
    }
  }

  return false
};
// @lc code=end

