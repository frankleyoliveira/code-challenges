// 344. Reverse String
// https://leetcode.com/problems/reverse-string/description

function reverseString(s: string[]): void {
  // simplest solution:
  // s.reverse()

  // but I'll try to reverse it manually
  let l = 0
  let r = s.length - 1

  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
}

const s1 = ["h", "e", "l", "l", "o"]
reverseString(s1)
console.log(s1) // ["o","l","l","e","h"]

export { }
