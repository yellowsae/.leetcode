/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    public cache: Map<number, number>
    public max: number
    constructor(capacity: number) {
        // 1. 定义一个缓存 Map, 结构是: [缓存最后的节点， ... ,  缓存最新的节点] 。 删除也是删除 Map的头部 
        this.cache = new Map()

        // 2. 定义 Map 的最大容量 
        this.max = capacity
    }

    // 3. get 方法读取缓存中的数据
    get(key: number): number {
        // 3.1 判断 cache 中是否存在 key
        if (this.cache.has(key)) {  // 如果存在，就把该节点放到 Map 的尾部
            // 3.1.1 先获取该节点的值
            let temp: number | any = this.cache.get(key)

            // 3.1.2 删除该节点
            this.cache.delete(key)

            // 3.1.3 把该节点放到 Map 的尾部
            this.cache.set(key, temp)

            // 3.1.4 返回该节点的值
            return temp
        }

        // 3.2 如果不存在，就返回 -1
        return -1
    }

    // 4. put 方法写入缓存
    put(key: number, value: number): void {
        // 4.1 判断 cache 中是否存在 key
        if (this.cache.has(key)) { // 如果存在，就把该节点 移动到 Map 的尾部
            // 4.1.1 删除该节点
            this.cache.delete(key)
        } else if (
            // 判断 cache 是否已经满了
            this.cache.size >= this.max
        ) {
            // 4.2 如果满了，就删除 Map 的头部
            // this.cache.keys().next().value： 这种方法是获取 Map 头部key的方法
            this.cache.delete(this.cache.keys().next().value)
        }
        // 4.3 把该节点放到 Map 的尾部 (无论Map是否有没有key)
        this.cache.set(key, value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

