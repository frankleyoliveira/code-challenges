// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/description/

function hammingWeight(n: number): number {
  const binary = n.toString(2)
  let result = 0

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== '0') result++
  }

  return result
}

console.log(hammingWeight(11)) // 3
console.log(hammingWeight(128)) // 1
console.log(hammingWeight(2147483645)) // 30

export { }
