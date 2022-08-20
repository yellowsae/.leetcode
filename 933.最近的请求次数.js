/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  // 1. 定义队列 
  this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */

// 队列相关 
RecentCounter.prototype.ping = function (t) {
  // 2. 每进行一次 请求 把 t 放入队列
  this.queue.push(t)

  //  循环
  while (this.queue[0] < t - 3000) {
    // 如果不在 范围内 出队 
    this.queue.shift()
  }

  // 4. 返回队列的长度
  return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

