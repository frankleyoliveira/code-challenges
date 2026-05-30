// 374. Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/description

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// simulate guess for tests
function guess(n: number): number {
  if (n === pick) return 0
  if (n > pick) return -1
  return 1
}

function guessNumber(n: number): number {
  let l = 1
  let r = n

  while (true) {
    const mid = Math.floor((l + r) / 2)
    const result = guess(mid)
    if (result === 0) return mid
    if (result < 0) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
}

let pick = 6
console.log(guessNumber(10)) // 6
pick = 1
console.log(guessNumber(1)) // 1
console.log(guessNumber(2)) // 1

export { }
