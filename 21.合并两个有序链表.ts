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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 初始判断 
  if (list1 === null) return list2
  if (list2 === null) return list1


  // 判断 
  if (list1.val < list2.val) {
    // 递归
    // 大的节点值  与 小的节点的下一个节点递归 相比

    // 小的节点的 下一个节点 指向 递归的返回值 
    list1.next = mergeTwoLists(list1.next, list2)

    // 返回小的节点
    return list1
  } else {
    // 如果 list1 大于 list2
    // 递归
    list2.next = mergeTwoLists(list2.next, list1)
    return list2
  }
};
// @lc code=end

