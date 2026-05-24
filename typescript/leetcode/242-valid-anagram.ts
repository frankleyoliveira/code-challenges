// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const lettersCount: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    let current = lettersCount[s[i]]
    lettersCount[s[i]] = current ? current + 1 : 1
  }

  console.log(lettersCount)

  for (let i = 0; i < t.length; i++) {
    let current = lettersCount[t[i]]
    if (!current) {
      return false
    }
    lettersCount[t[i]] = current - 1
  }

  return true
}

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false

export { }
