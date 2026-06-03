// 414. Third Maximum Number
// https://leetcode.com/problems/third-maximum-number/description

function thirdMax(nums: number[]): number {
  const uniqueSorted = [...new Set(nums)].sort((a, b) => a - b);

  if (uniqueSorted.length >= 3) {
    return uniqueSorted.at(-3)!
  }
  return uniqueSorted.at(-1)!
}


console.log(thirdMax([3, 2, 1])) // 1
console.log(thirdMax([1, 2])) // 2
console.log(thirdMax([2, 2, 3, 1])) // 1

export { }
