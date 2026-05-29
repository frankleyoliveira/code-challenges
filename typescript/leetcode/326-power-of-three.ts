// 326. Power of Three
// https://leetcode.com/problems/power-of-three/description

function isPowerOfThree(n: number): boolean {
  let division3 = n

  while (division3 > 1) {
    division3 /= 3
  }

  return division3 === 1
}

console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(0)) // false
console.log(isPowerOfThree(-1)) // false
console.log(isPowerOfThree(1)) // true

export { }
