// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/description/

function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')

  if (pattern.length !== words.length) {
    return false
  }

  const patternMap = new Map()

  for (let i = 0; i < pattern.length; i++) {
    const mapped = patternMap.get(pattern[i])

    if (mapped) {
      if (mapped !== words[i]) {
        return false
      }
    } else {
      if (Array.from(patternMap.values()).some(word => word === words[i])) {
        return false
      }
      patternMap.set(pattern[i], words[i])
    }
  }
  return true
}

console.log(wordPattern('abba', 'dog cat cat dog')) // true
console.log(wordPattern('abba', 'dog cat cat fish')) // false
console.log(wordPattern('aaaa', 'dog cat cat dog')) // false
console.log(wordPattern('abba', 'dog dog dog dog')) // false

export { }
