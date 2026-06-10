// 520. Detect Capital
// https://leetcode.com/problems/detect-capital/description

function detectCapitalUse(word: string): boolean {
  if (word === word.toUpperCase()) return true
  if (word === word[0] + word.slice(1).toLowerCase()) return true

  return false
}

console.log(detectCapitalUse('USA')) // true
console.log(detectCapitalUse('FlaG')) // false

export { }
