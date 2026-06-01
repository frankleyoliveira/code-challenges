// 401. Binary Watch
// https://leetcode.com/problems/binary-watch/description

function readBinaryWatch(turnedOn: number): string[] {
  if (turnedOn > 8) return []

  const possibleTimes: string[] = []

  const getHours = (leds: number) => {
    switch (leds) {
      case 1:
        return [8, 4, 2, 1]
      case 2:
        return [10, 9, 6, 5, 3]
      case 3:
        return [11, 7]
      default:
        return [0]
    }
  }

  const getMinutes = (leds: number) => {
    switch (leds) {
      case 1:
        return [32, 16, 8, 4, 2, 1]
      case 2:
        return [48, 40, 36, 34, 33, 24, 20, 18, 17, 12, 10, 9, 6, 5, 3]
      case 3:
        return [56, 52, 50, 49, 44, 42, 41, 38, 37, 35, 28, 26, 25, 22, 21, 19, 14, 13, 11, 7]
      case 4:
        return [58, 57, 54, 53, 51, 46, 45, 43, 39, 30, 29, 27, 23, 15]
      case 5:
        return [59, 55, 47, 31]
      default:
        return [0]
    }
  }

  // hours and minutes
  const groups = [
    [[0, 0]],
    [[1, 0], [0, 1]],
    [[2, 0], [1, 1], [0, 2]],
    [[3, 0], [2, 1], [1, 2], [0, 3]],
    [[3, 1], [2, 2], [1, 3], [0, 4]],
    [[3, 2], [2, 3], [1, 4], [0, 5]],
    [[3, 3], [2, 4], [1, 5]],
    [[3, 4], [2, 5]],
    [[3, 5]],
  ]

  const group = groups[turnedOn]
  for (let i = 0; i < group.length; i++) {
    const [ledsH, ledsM] = group[i]
    const hours = getHours(ledsH)
    const minutes = getMinutes(ledsM)
    for (let j = 0; j < hours.length; j++) {
      for (let k = 0; k < minutes.length; k++) {
        possibleTimes.push(`${hours[j]}:${minutes[k].toString().padStart(2, '0')}`)
      }
    }
  }

  return possibleTimes
}

console.log(readBinaryWatch(1)) // ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9)) // []
console.log(readBinaryWatch(0)) // ["0:00"]

export { }
