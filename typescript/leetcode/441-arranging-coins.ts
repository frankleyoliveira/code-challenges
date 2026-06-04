// 441. Arranging Coins
// https://leetcode.com/problems/arranging-coins/description

function arrangeCoins(n: number): number {
  let rows = 0
  let i = n

  while (i > rows) {
    rows++
    i -= rows
  }

  return rows
}

console.log(arrangeCoins(5)) // 2
console.log(arrangeCoins(8)) // 3

export { }
