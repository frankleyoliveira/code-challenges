// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/description

function fib(n: number): number {
  if (n < 2) return n

  let prevPrev = 0
  let prev = 1

  for (let i = 2; i < n; i++) {
    const current = prevPrev + prev
    prevPrev = prev
    prev = current
  }

  return prevPrev + prev
}

console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(6)) // 8

export { }
