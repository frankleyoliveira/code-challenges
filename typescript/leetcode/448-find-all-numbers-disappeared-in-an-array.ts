// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description

function findDisappearedNumbers(nums: number[]): number[] {
  const missingNums: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1
    nums[idx] = -Math.abs(nums[idx])
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missingNums.push(i + 1)
    }
  }

  return missingNums
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5,6]
console.log(findDisappearedNumbers([1, 1])) // [2]

export { }
