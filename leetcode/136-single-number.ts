// 136. Single Number
// https://leetcode.com/problems/single-number/description/

function singleNumber(nums: number[]): number {
  let result = 0

  for (const num of nums) {
    result ^= num
  }

  return result
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(singleNumber([1])) // 1

export { }
