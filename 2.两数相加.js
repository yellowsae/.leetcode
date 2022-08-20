/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 1. 定义新链表 
  let l3 = new ListNode()

  // 2. p1 p2 p3 定义指针 -> 用于循环链表 
  let p1 = l1
  let p2 = l2
  let p3 = l3

  // 定义 carry , 保存满10 进位 
  let carry = 0  // 初始为0

  // 3. 循环链表 
  while (p1 || p2) { // 当 p1 || p2 有值时
    // 4. 当 p1 p2 有值时，取 p1 p2 的值 
    let val1 = p1 ? p1.val : 0
    let val2 = p2 ? p2.val : 0


    // 5. p1 p2 相加
    let val = val1 + val2 + carry

    // 6. 定义 carry , 满10 进位
    // 赋值 carry 等于 val / 10  取 进位的数
    carry = Math.floor(val / 10)  // 13 / 10 -> 1

    // 7. 创建新链表，给 p3.next 赋值 
    p3.next = new ListNode(val % 10)  // 13 % 10 -> 3  // 取个位数赋值

    // 8. 移动 p1 p2 p3 的指针 
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next

    p3 = p3.next
  }

  // 10， 还有一种情况 ， 当遍历完链表 carry 还有值 
  // 创建新链表，给 p3.next 赋值
  if (carry) {
    p3.next = new ListNode(carry)
  }

  // 9 . 返回 p3.next
  return l3.next
};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
