// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

function strStr(haystack: string, needle: string): number {
  // Just by using indexOf the problem is solved...
  // return haystack.indexOf(needle)

  // But I'll do it manually too
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let isMatch = true

      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isMatch = false
          break
        }
      }

      if (isMatch) {
        return i
      }

    }
  }

  return -1
}

console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('thequickbrownfoxjumpsoverthelazydog', 'fox')) // 13
console.log(strStr('mississippi', 'issip')) // 4
console.log(strStr('leetcode', 'leeto')) // -1

export { }