// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description

function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []

  while (nums1.length > 0 && nums2.length > 0) {
    const num1 = nums1.pop()!
    const num2Idx = nums2.findIndex(num2 => num2 === num1)
    if (num2Idx !== -1) {
      nums2.splice(num2Idx, 1)
      result.push(num1)
    }
  }

  return result
}

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4] or [4, 9]

export { }
