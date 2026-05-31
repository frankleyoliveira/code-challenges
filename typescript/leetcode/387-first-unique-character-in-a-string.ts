// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/description

function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    let isUnique = true
    if (i < s.length)
      for (let j = 0; j < s.length; j++) {
        if (s[i] === s[j] && i !== j) {
          isUnique = false
          break
        }
      }
    if (isUnique) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) // 2
console.log(firstUniqChar('aabb')) // -1

export { }
