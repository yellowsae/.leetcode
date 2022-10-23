/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  // 1. 创建一个链表 
  const dummy = new ListNode()
  dummy.next = head

  // 定义 p 指针 
  let p = dummy


  // 2. 遍历链表
  while (p.next !== null && p.next.next !== null) {
    // 交换链表 
    // 2.1 定义 n1 n2 指针
    const n1 = p.next
    const n2 = p.next.next

    // 2.2 p.next 指向 n2
    p.next = n2
    // 2.3 n1.next 指向 n2.next 
    n1.next = n2.next
    // 2.4 n2.next 指向 n1
    n2.next = n1
    // 2.5 p 指向 n1
    p = n1
  }

  // 3. 返回链表
  return dummy.next
};
// @lc code=end

