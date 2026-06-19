// 703. Kth Largest Element in a Stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

class KthLargest {
  k: number
  nums: number[]

  constructor(k: number, nums: number[]) {
    this.k = k
    this.nums = nums.sort((a, b) => b - a)

    if (nums.length < k) {
      this.nums.push(-Infinity)
    } else {
      this.nums = this.nums.splice(0, k)
    }
  }

  add(val: number): number {
    if (val <= this.nums[this.k - 1]) {
      return this.nums[this.k - 1]
    }

    this.nums.pop()

    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] < val) {
        this.nums.splice(i, 0, val)
        return this.nums[this.k - 1]
      }
    }

    this.nums.push(val)
    return val
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)) // 4
console.log(kthLargest.add(5)) // 5
console.log(kthLargest.add(10)) // 5
console.log(kthLargest.add(9)) // 8
console.log(kthLargest.add(4)) // 8

export { }
