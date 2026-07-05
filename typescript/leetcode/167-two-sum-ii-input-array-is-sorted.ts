// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

function twoSum(numbers: number[], target: number): number[] {
  let l = 0
  let r = numbers.length - 1

  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--
    } else {
      l++
    }
  }

  return [l + 1, r + 1]
}

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 2]
console.log(twoSum([2, 3, 4], 6)) // [1, 3]
console.log(twoSum([-1, 0], -1)) // [1, 2]

export { }
