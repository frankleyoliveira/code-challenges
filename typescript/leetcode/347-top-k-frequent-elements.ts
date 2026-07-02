// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) ?? 0) + 1)
  }

  const sorted = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1])
  const result: number[] = []

  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0])
  }

  return result

}

console.log(topKFrequent([3, 1, 1, 1, 2, 2], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)) // [1, 2]

export { }
