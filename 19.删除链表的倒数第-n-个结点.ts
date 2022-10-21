/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   // 1. 创建空链表 
//   const dummy: ListNode = new ListNode();
//   dummy.next = head;  // 指向头节点

//   // 2. 创建双指针 
//   let n1: ListNode = dummy;
//   let n2: ListNode = dummy;

//   // 3. n2指针先走 n + 1 步 ； i <= n
//   for (let i = 0; i <= n; i++) {
//     n2 = n2.next;
//   }

//   // 4. 当n2没有到尽头时
//   while (n2 !== null) {
//     // 移动 n1 n2 ， 中间始终保持 n 个位置 
//     n1 = n1.next;
//     n2 = n2.next;
//   }

//   // 5. 当 n2 为null时， n1.next 就是要删除的节点
//   n1.next = n1.next.next;

//   // 6. 返回 dummy.next
//   return dummy.next;
// };



function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 1. 创建空链表 
  const dummy: ListNode = new ListNode();
  dummy.next = head;  // 指向头节点

  // 2. 创建双指针 
  let n1: ListNode = dummy;
  let n2: ListNode = dummy;

  // 3. n2指针先走 n 步 i < n
  for (let i = 0; i < n; i++) {
    n2 = n2.next;
  }

  // 4. 当n2.next 没有到尽头时
  while (n2.next !== null) {
    // 移动 n1 n2 ， 中间始终保持 n - 1 个位置 
    n1 = n1.next;
    n2 = n2.next;
  }

  // 5. 当 n2的下一位为null时， n1.next 就是要删除的节点
  n1.next = n1.next.next;

  // 6. 返回 dummy.next
  return dummy.next;
};
// @lc code=end

