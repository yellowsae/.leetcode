/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 1. 定义两个指针 
  let p1 = head  // 慢指针 
  let p2 = head // 快指针 

  // 2. 循环链表 
  while (p1 && p2 && p2.next) {  // 增加判断 p2.next 必须有值，否则会报错
    // 3. 移动两个指针 
    p1 = p1.next  // 慢指针移动一个
    p2 = p2.next.next // 快指针移动两个

    // 4. 判断两个指针是否相等 
    if (p1 === p2) {
      // 相等说明有环
      return true
    }
  }

  // 5. 循环解说，说明没有环
  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasCycle;
// @after-stub-for-debug-end
