// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/description

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // My first solution
  // const ans: number[] = []

  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     if (nums1[i] === nums2[j]) {
  //       let nextGreater = -1
  //       for (let k = j + 1; k < nums2.length; k++) {
  //         if (nums2[k] > nums2[j]) {
  //           nextGreater = nums2[k]
  //           break
  //         }
  //       }
  //       ans.push(nextGreater)
  //       break
  //     }
  //   }
  // }

  // return ans

  // O(m + n) approach
  const nextGreater = new Map<number, number>()
  const stack: number[] = []

  for (const num of nums2) {
    // Current num is the "next greater" for any smaller values waiting on the stack
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      nextGreater.set(stack.pop()!, num)
    }
    stack.push(num)
  }
  // Anything left on the stack never found a greater element → defaults to -1

  return nums1.map(num => nextGreater.get(num) ?? -1)
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])) // [3, -1]

export { }
