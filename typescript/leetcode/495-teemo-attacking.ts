// 495. Teemo Attacking
// https://leetcode.com/problems/teemo-attacking/description

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let poisonedDuration = 0

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const next = timeSeries[i + 1]
    const end = timeSeries[i] + duration
    let currentDuration = duration

    if (next < end) {
      currentDuration -= (end - next)
    }

    poisonedDuration += currentDuration
  }

  return poisonedDuration + duration
}

console.log(findPoisonedDuration([1, 4], 2)) // 4
console.log(findPoisonedDuration([1, 2], 2)) // 3

export { }
