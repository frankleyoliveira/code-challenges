// 506. Relative Ranks
// https://leetcode.com/problems/relative-ranks/description

function findRelativeRanks(score: number[]): string[] {
  const sorted = [...score].sort((a, b) => b - a)
  const rankMap = new Map<number, string>()

  for (let i = 0; i < sorted.length; i++) {
    let val = (i + 1).toString()

    if (i === 0) {
      val = 'Gold Medal'
    } else if (i === 1) {
      val = 'Silver Medal'
    } else if (i === 2) {
      val = 'Bronze Medal'
    }

    rankMap.set(sorted[i], val)
  }

  return score.map(s => rankMap.get(s)!)
}

console.log(findRelativeRanks([5, 4, 3, 2, 1])) // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])) // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

export { }
