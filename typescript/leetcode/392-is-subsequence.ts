// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description

function isSubsequence(s: string, t: string): boolean {
  const tArr = t.split('')
  for (let i = 0; i < s.length; i++) {
    let found = false

    while (tArr.length) {
      if (s[i] === tArr.shift()) {
        found = true
        break
      }
    }

    if (!found) return false
  }

  return true
}

console.log(isSubsequence('abc', 'ahbgdc')) // true
console.log(isSubsequence('axc', 'ahbgdc')) // false

export { }
