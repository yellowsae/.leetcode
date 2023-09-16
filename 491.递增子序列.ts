function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = []

  // 不需要排序

  // 回溯
  const backtrack = (patch: number[], nums: number[], startIndex) => {
    // 当 patch 有值时，直接添加进去 
    if (patch.length > 1) {
      res.push([...patch])
    }

    // 使用 set 记录是否出现过的值 
    let set = new Set()

    // 
    for (let i = startIndex; i < nums.length; i++) {

      // 判单条件 
      // - patch 有值 和 nums[i] < patch 最后一个值时， 不是递增 
      // - set.has(nums[i]) 具有相同的值时， 说明已经出现过 ，就不再使用了 
      if (patch.length && nums[i] < patch[patch.length - 1] || set.has(nums[i])) continue

      set.add(nums[i])

      // 递归 
      backtrack(
        patch.concat(nums[i]),
        nums,
        i + 1
      )
    }
  }
  backtrack([], nums, 0)
  return res
};
