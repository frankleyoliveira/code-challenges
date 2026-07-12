// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s: string, k: number): number {
  let max = 1

  for (let i = 0; i < s.length; i++) {
    let counter = 1
    let kCount = k

    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === s[i]) {
        counter++
        max = Math.max(max, counter)
      } else if (kCount > 0) {
        kCount--
        counter++
        max = Math.max(max, counter)
      } else {
        counter = 1
        kCount = k
        break
      }
    }

    if (kCount > 0) {
      max = Math.max(max, counter + Math.min(kCount, i))
    }
  }

  return max
}

console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("ABBB", 2)) // 4
console.log(characterReplacement("ABAB", 0)) // 1
console.log(characterReplacement("AABABBA", 1)) // 4

export { }
