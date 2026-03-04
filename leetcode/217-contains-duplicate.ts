// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
  const numsSet = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      return true
    }

    numsSet.add(nums[i])
  }

  return false
}

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true

export { }
