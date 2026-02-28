// 190. Reverse Bits
// https://leetcode.com/problems/reverse-bits/description/

function reverseBits(n: number): number {
  const binary = n.toString(2)
  const missingZeroesLength = 32 - binary.length
  const missingZeroes = [...new Array(missingZeroesLength).fill(0)].join('')
  const binary32 = missingZeroes + binary
  const reversed = binary32.split('').reverse().join('')

  return parseInt(reversed, 2)
}

console.log(reverseBits(43261596)) // 964176192

export { }
