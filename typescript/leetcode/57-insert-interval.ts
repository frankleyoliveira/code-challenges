// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/description/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = []

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[1]) {
      res.push(newInterval)
      return [...res, ...intervals.slice(i)]
    }

    if (intervals[i][1] < newInterval[0]) {
      res.push(intervals[i])
      continue
    }

    // overlaps
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
  }

  res.push(newInterval)

  return res
}

console.log(insert([[1, 3], [6, 9]], [2, 5])) // [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])) // [[1,2],[3,10],[12,16]]
console.log(insert([[1, 5]], [6, 8])) // [[1,5],[6,8]]
console.log(insert([[1, 5]], [0, 0])) // [[0,0],[1,5]]
console.log(insert([[1, 5], [6, 8]], [0, 9])) // [[0,9]]
console.log(insert([[3, 5], [12, 15]], [6, 6])) // [[3,5],[6,6],[12,15]]

export { }
