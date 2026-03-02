// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/

function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>()
  const tToS = new Map<string, string>()

  for (let i = 0; i < s.length; i++) {
    const currentS = s[i]
    const currentT = t[i]

    const mappedS = sToT.get(currentS)
    const mappedT = tToS.get(currentT)

    if (!mappedS && !mappedT) {
      sToT.set(currentS, currentT)
      tToS.set(currentT, currentS)
    } else if (!mappedS || !mappedT || mappedS !== currentT || mappedT !== currentS) {
      return false
    }
  }

  return true
}

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('f11', 'b23')) // false
console.log(isIsomorphic('paper', 'title')) // true

export { }
