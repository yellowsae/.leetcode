/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class RecentCounter {
    public queue: number[]
    constructor() {
        this.queue = []
    }

    ping(t: number): number {
        // 入队 
        this.queue.push(t)

        // 循环 
        while (this.queue[0] < t - 3000) {
            // 出栈 
            this.queue.shift()
        }
        return this.queue.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

