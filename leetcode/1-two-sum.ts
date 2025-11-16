// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/

// Optimized version using Map - O(n)
function twoSum(nums: number[], target: number): number[] {
  const sumMap: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const sumTarget = sumMap.get(target - num)

    if (sumTarget !== undefined) {
      return [sumTarget, i]
    }

    sumMap.set(num, i)
  }

  return []
}

// This was my first solution using the "brute force" way - O(n²)
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let i2 = i + 1; i2 < nums.length; i2++) {
//       if (nums[i] + nums[i2] === target) {
//         return [i, i2]
//       }
//     }
//   }

//   return []
// }

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
console.log(twoSum([3, 3], 6)) // [0, 1]

export { }