// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/description

function findWords(words: string[]): string[] {
  const row1 = new Set("qwertyuiop")
  const row2 = new Set("asdfghjkl")
  const row3 = new Set("zxcvbnm")

  return words.filter(word => {
    const lower = word.toLowerCase()
    const first = lower[0]

    const row =
      row1.has(first) ? row1 :
        row2.has(first) ? row2 :
          row3

    for (let i = 1; i < lower.length; i++) {
      if (!row.has(lower[i])) {
        return false
      }
    }

    return true
  })
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])) // ["Alaska","Dad"]
console.log(findWords(["omk"])) // []
console.log(findWords(["adsdf", "sfd"])) // ["adsdf","sfd"]

export { }
