// 853. Car Fleet
// https://leetcode.com/problems/car-fleet/description/

function carFleet(target: number, position: number[], speed: number[]): number {
  const ps: number[][] = [] // position, speed
  const stack: number[] = []

  for (let i = 0; i < position.length; i++) {
    ps.push([position[i], speed[i]])
  }
  ps.sort((a, b) => b[0] - a[0])


  for (const [p, s] of ps) {
    const time = (target - p) / s

    if ((stack[stack.length - 1] ?? 0) < time) {
      stack.push(time)
    }
  }

  return stack.length
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])) // 3
console.log(carFleet(10, [3], [3])) // 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])) // 1

export { }
