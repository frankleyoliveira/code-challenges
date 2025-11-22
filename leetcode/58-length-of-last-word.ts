// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
  // const words = s.trim().split(' ')
  // return words[words.length - 1].length

  // now a more manual implementation...
  let count = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (count > 0) {
        return count
      }

      continue
    }

    count++
  }

  return count
}

console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')) // 4

export { }