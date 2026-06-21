// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/description/

function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b)

    const combination = stones[stones.length - 1] - stones[stones.length - 2]

    stones.pop()
    stones.pop()

    if (combination !== 0) {
      stones.push(combination)
    }
  }

  return stones[0] ?? 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])) // 1
console.log(lastStoneWeight([1])) // 1

export { }
