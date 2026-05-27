// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/description

class NumArray {
  private nums: number[]

  constructor(nums: number[]) {
    this.nums = nums
  }

  sumRange(left: number, right: number): number {
    let sum = 0

    for (let i = left; i <= right; i++) {
      sum += this.nums[i]
    }

    return sum
  }
}

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(obj.sumRange(0, 2)) // 1
console.log(obj.sumRange(2, 5)) // 1
console.log(obj.sumRange(0, 5)) // 1

export { }
