/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

// 递归  对比
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   // 初始判断 
//   if (list1 === null) return list2
//   if (list2 === null) return list1


//   // 判断 
//   if (list1.val < list2.val) {
//     // 递归
//     // 大的节点值  与 小的节点的下一个节点递归 相比

//     // 小的节点的 下一个节点 指向 递归的返回值 
//     list1.next = mergeTwoLists(list1.next, list2)

//     // 返回小的节点
//     return list1
//   } else {
//     // 如果 list1 大于 list2
//     // 递归
//     list2.next = mergeTwoLists(list2.next, list1)
//     return list2
//   }
// };



// 方法二 ： 双指针 + dummy
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 1. 定义 dummy
  let dummy: ListNode = new ListNode(0)
  let cur = dummy

  // 2. 定义双指针 
  let p1: ListNode | null = list1
  let p2: ListNode | null = list2

  // 3. 循环 
  while (p1 && p2) {
    if (p1.val < p2.val) {
      cur.next = p1
      p1 = p1.next
    } else {
      cur.next = p2
      p2 = p2.next
    }
    // 移动 cur 
    cur = cur.next
  }

  // 4. 当while 循环结束 可能有一个链表还有剩余
  if (p1) cur.next = p1
  if (p2) cur.next = p2

  // 5. 返回 dummy.next
  return dummy.next
};


// @lc code=end

