// 292. Nim Game
// https://leetcode.com/problems/nim-game/description/

function canWinNim(n: number): boolean {
  return n % 4 !== 0
}

/*
4 -> false !
5 -> true
7 -> true
8 -> false !
9 -> true
10 -> true
11 -> true
12 -> false !
13 -> true
*/

console.log(canWinNim(4)) // false
console.log(canWinNim(1)) // true
console.log(canWinNim(2)) // true

export { }
