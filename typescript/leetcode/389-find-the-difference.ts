// 389. Find the Difference
// https://leetcode.com/problems/find-the-difference/description

function findTheDifference(s: string, t: string): string {
  const sArr = s.split('')
  for (let i = 0; i < t.length; i++) {
    const idx = sArr.findIndex(char => char === t[i])
    if (idx === -1) {
      return t[i]
    }
    sArr.splice(idx, 1)
  }
  return ''
}

console.log(findTheDifference('abcd', 'abcde')) // e
console.log(findTheDifference('', 'y')) // y

export { }
