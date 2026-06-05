// 459. Repeated Substring Pattern
// https://leetcode.com/problems/repeated-substring-pattern/description

function repeatedSubstringPattern(s: string): boolean {
  const len = s.length

  const compareSubstrings = (divider: number): boolean => {
    if (len % divider !== 0) return false

    const size = len / divider
    const substringToCompare = s.slice(0, size)

    for (let i = size; i < len; i += size) {
      if (s.slice(i, i + size) !== substringToCompare) {
        return false
      }
    }

    return true
  }

  if (compareSubstrings(2)) return true

  for (let i = 3; i <= len; i += 2) {
    if (compareSubstrings(i)) return true
  }

  return false
}

// one line solution from leetcode.
// return (s + s).slice(1, -1).includes(s);

console.log(repeatedSubstringPattern('abab')) // true
console.log(repeatedSubstringPattern('aba')) // false
console.log(repeatedSubstringPattern('abcabcabcabc')) // true

export { }
