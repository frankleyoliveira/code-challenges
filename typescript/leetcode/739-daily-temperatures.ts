// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = Array(temperatures.length).fill(0)
  const stack: number[][] = [] // temp, idx

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
      const [, stackIdx] = stack.pop()!
      answer[stackIdx] = i - stackIdx
    }
    stack.push([temperatures[i], i])
  }

  return answer
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])) // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])) // [1,1,0]

export { }
