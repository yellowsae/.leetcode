/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {

  let p: ListNode | null = head;


  while (p && p.next) {
    // 当 p 的下一个节点值 与 p 相同时,  把 p.next 指向它的 下下个节点 
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return head

};
// @lc code=end

