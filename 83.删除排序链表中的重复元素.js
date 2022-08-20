/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {

  // 1. 声明一个指针 p，指向 head
  let p = head

  // 2. 循环 p, 循环链表 
  while (p && p.next) { // 保证当前节点有值， 和 保证当前节点的下个节点也有值
    // 3. 如果当前节点的值和下个节点的值相同，则删除下个节点
    if (p.val === p.next.val) {
      // 4. 删除下个节点
      p.next = p.next.next
    } else {
      // 5. 移动 p 指针
      p = p.next
    }
  }

  // 6. 返回 head
  return head
};
// @lc code=end

