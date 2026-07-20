// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s: string, k: number): number {
  const charMap = new Map<string, number>([[s[0], 1]])
  let res = 1
  let l = 0
  let r = 0

  while (r < s.length) {
    const windowLen = r - l + 1
    const maxFrequency = Math.max(0, Math.max(...charMap.values()))

    if (windowLen - maxFrequency <= k) {
      res = Math.max(res, windowLen)
      r++
      charMap.set(s[r], (charMap.get(s[r]) ?? 0) + 1)
    } else {
      charMap.set(s[l], charMap.get(s[l])! - 1)
      l++
    }
  }

  return res
}

console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("ABBB", 2)) // 4
console.log(characterReplacement("ABAB", 0)) // 1
console.log(characterReplacement("AABABBA", 1)) // 4

export { }
