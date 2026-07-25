// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = []

  for (let i = 0; i < temperatures.length; i++) {
    let hasWarmer = false
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        hasWarmer = true
        answer.push(j - i)
        break
      }
    }
    if (!hasWarmer) {
      answer.push(0)
    }
  }

  return answer
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])) // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])) // [1,1,0]

export { }
