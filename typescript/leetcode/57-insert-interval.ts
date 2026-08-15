// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/description/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (!intervals.length) return [newInterval]

  const result: number[][] = []
  let foundInterval = false

  for (let i = 0; i < intervals.length; i++) {
    result.push(intervals[i])

    if (!foundInterval && intervals[i][1] >= newInterval[0] && intervals[i][0] <= newInterval[1]) {
      const lastIdx = result.length - 1
      const [curMin, curMax] = result[lastIdx]

      result[lastIdx][0] = Math.min(curMin, newInterval[0])
      result[lastIdx][1] = Math.max(curMax, newInterval[1])

      foundInterval = true

      continue
    }

    if (foundInterval && intervals[i][0] <= newInterval[1]) {
      const lastMax = result.pop()![1]
      const curMax = result[result.length - 1][1]

      result[result.length - 1][1] = Math.max(curMax, lastMax, intervals[i][1])

      continue
    }

    if (!foundInterval && i < intervals.length - 1 && intervals[i][1] < newInterval[0] && intervals[i + 1][0] > newInterval[1]) {
      result.push(newInterval)
      foundInterval = true
    }
  }

  if (!foundInterval) {
    if (newInterval[1] < result[0][0]) {
      result.unshift(newInterval)
    } else {
      result.push(newInterval)
    }
  }

  return result
}

console.log(insert([[1, 3], [6, 9]], [2, 5])) // [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])) // [[1,2],[3,10],[12,16]]
console.log(insert([[1, 5]], [6, 8])) // [[1,5],[6,8]]
console.log(insert([[1, 5]], [0, 0])) // [[0,0],[1,5]]
console.log(insert([[1, 5], [6, 8]], [0, 9])) // [[0,9]]
console.log(insert([[3, 5], [12, 15]], [6, 6])) // [[3,5],[6,6],[12,15]]

export { }
