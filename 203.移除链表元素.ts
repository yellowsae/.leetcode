/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 直接循环判断 删除 
  if (head === null) return null

  let dummy = new ListNode(0)
  dummy.next = head


  let current = dummy

  while (current.next) {
    if (current.next.val === val) {
      // 删除 该节点 
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return dummy.next
};
// @lc code=end


