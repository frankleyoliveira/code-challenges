// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s: string, k: number): number {
  const countMap = new Map<string, number>()
  let res = 0
  let l = 0
  let maxF = 0

  for (let r = 0; r < s.length; r++) {
    countMap.set(s[r], (countMap.get(s[r]) ?? 0) + 1)
    maxF = Math.max(maxF, countMap.get(s[r])!)

    while ((r - l + 1) - maxF > k) {
      countMap.set(s[l], countMap.get(s[l])! - 1)
      l++
    }

    res = Math.max(res, r - l + 1)
  }

  return res
}

console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("ABBB", 2)) // 4
console.log(characterReplacement("ABAB", 0)) // 1
console.log(characterReplacement("AABABBA", 1)) // 4

export { }
