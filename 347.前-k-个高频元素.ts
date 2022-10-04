/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class MinHeap {
  public heap
  constructor() {
    // 声明一个数组
    this.heap = []
  }


  // 获取父节点的索引
  getParentIndex(i) {
    // 公式 : i - 1 / 2 
    // return Math.floor(i - 1 / 2)
    return i - 1 >> 1   // 使用 2 进取商
  }


  // 获取左节点的索引
  getLeftIndex(i) {
    // 公式 : i * 2 + 1
    return i * 2 + 1
  }

  // 获取右侧节点的索引
  getRightIndex(i) {
    // 公式 : i * 2 + 2
    return i * 2 + 2
  }


  // 交换方法 
  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  // 上移操作
  shiftUp(index) {
    // 需要拿到父节点的索引
    // 不停的与父节点进行交换 ,直到父节点小于等于 index 位置的值

    // 如果已经是堆顶了, 就不需要再上移了
    if (index === 0) return

    // 1. 获取父节点的索引
    const parentIndex = this.getParentIndex(index)

    // 2. 比较 
    // 2.1 如果父节点的值大于 index 位置的值, 需要交换
    if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
      // 封装为 swap 方法
      this.swap(parentIndex, index)

      // 继续上移
      this.shiftUp(parentIndex)
    }
  }



  // 下移操作
  shiftDown(index) { // 接收一个下标 
    //  下移就是不断的与子节点进行比较, 与最小的子节点进行交换,  直到所有的子节点都 大于 等于 index 位置的值

    // 1. 获取左侧节点 
    const leftIndex = this.getLeftIndex(index)

    // 2. 获取右侧节点
    const rightIndex = this.getRightIndex(index)

    // 3 比较 
    // 3.1 如果左侧节点的值小于 index 位置的值, 需要交换
    if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
      // 交换 
      this.swap(leftIndex, index)

      // 继续下移
      this.shiftDown(leftIndex)
    }

    // 3.2 如果右侧节点的值小于 index 位置的值, 需要交换
    if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
      // 交换 
      this.swap(rightIndex, index)

      // 继续下移
      this.shiftDown(rightIndex)
    }
  }

  // 插入方法 
  insert(value) {
    // 1. 插入操作 
    this.heap.push(value)
    // 2. 上移, 传入插入的索引, 也就是最后一位
    this.shiftUp(this.heap.length - 1)
  }



  // 删除堆顶的元素
  pop() {
    // 1. 删除堆顶元素: 直接把堆最后一个元素换位堆顶元素，这样可以避免堆的结构被破坏 
    // pop () 方法删除数组的最后一个元素，并返回该元素的值
    this.heap[0] = this.heap.pop()

    // 2. 下移操作
    this.shiftDown(0)

  }


  // 获取堆顶的元素
  peek() {
    return this.heap[0]
  }

  // 获取堆的大小
  size() {
    return this.heap.length
  }
}

function topKFrequent(nums: number[], k: number): number[] {

  // 1. 记录每个数字出现的次数
  const map = new Map()
  nums.forEach(n => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  })

  // 2. 构建一个最小堆
  const h: MinHeap = new MinHeap()

  // 3. 遍历 map
  map.forEach((value, key) => {
    // 往堆中插入元素 {value, key} 的结构 
    h.insert({ value, key })

    // 判断：如果堆的大小大于 k, 就删除堆顶元素
    if (h.size() > k) {
      h.pop()
    }
  })


  // 4. 返回 最后剩下堆中的元素
  return h.heap.map(item => item.key)
};
// @lc code=end

