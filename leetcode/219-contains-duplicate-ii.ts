// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numsMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (numsMap.has(num)) {
      if (i - numsMap.get(num)! <= k) {
        return true
      }
    }
    numsMap.set(num, i)
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false

export { }
