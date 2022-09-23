/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 创建 l3 最后需要返回的 ListNode
  let l3: ListNode | null = new ListNode();

  // 指针 
  let p1: ListNode | null = l1
  let p2: ListNode | null = l2
  let p3: ListNode | null = l3

  let carry: number = 0
  // 循环 
  while (p1 || p2) {
    let v1: number = p1 ? p1.val : 0
    let v2: number = p2 ? p2.val : 0
    let val: number = v1 + v2 + carry
    // 修改进位的值 
    carry = Math.floor(val / 10)
    // 赋值 p3
    p3.next = new ListNode(val % 10)
    // 移动指针 
    if (p1) {
      p1 = p1.next
    }
    if (p2) {
      p2 = p2.next
    }
    p3 = p3.next
  }

  // 最后一位进位
  if (carry) p3.next = new ListNode(carry)

  // 返回 l3.next
  return l3.next

};
// @lc code=end

