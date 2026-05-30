// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/description

function intersection(nums1: number[], nums2: number[]): number[] {
  const unique1 = new Set(nums1)
  const unique2 = new Set(nums2)
  const result: number[] = []

  for (let num of unique1) {
    if (unique2.has(num)) {
      result.push(num)
    }
  }

  return result
}

console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4] or [4, 9]

export { }

