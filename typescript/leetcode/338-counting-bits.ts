// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/description

function countBits(n: number): number[] {
  // const ans: number[] = []

  // for (let i = 0; i <= n; i++) {
  //   const binary = i.toString(2)
  //   let count = 0
  //   for (let j = 0; j < binary.length; j++) {
  //     if (binary[j] === '1') {
  //       count++
  //     }
  //   }
  //   ans.push(count)
  // }

  const ans: number[] = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1)
    // "i >> i" -> Right shift -> slides all bits to right and drops the rightmost
    // i & 1 -> 1 if number is odd, 0 if number is even
  }

  return ans
}

console.log(countBits(2)) // [0,1,1]
console.log(countBits(5)) // [0,1,1,2,1,2]

export { }
