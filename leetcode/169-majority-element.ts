// 169. Majority Element
// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number {
  const numsMap = new Map<number, number>()

  const halfLength = Math.round(nums.length / 2)

  for (const num of nums) {
    const count = (numsMap.get(num) ?? 0) + 1
    if (count == halfLength) {
      return num
    }

    numsMap.set(num, count)
  }

  return 0
}

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2

export { }
