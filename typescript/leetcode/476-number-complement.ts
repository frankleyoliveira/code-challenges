// 476. Number Complement
// https://leetcode.com/problems/number-complement/description

function findComplement(num: number): number {
  const bitLength = Math.floor(Math.log2(num)) + 1
  const mask = (1 << bitLength) - 1
  return num ^ mask
}

console.log(findComplement(5)) // 2
console.log(findComplement(1)) // 0

export { }
