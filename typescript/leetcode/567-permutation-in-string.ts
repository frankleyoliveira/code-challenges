// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const s1Count = Array(26).fill(0)
  const s2Count = Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++
    s2Count[s2.charCodeAt(i) - 97]++
  }

  let matches = 0
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++
  }

  let l = 0
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true

    const rIdx = s2.charCodeAt(r) - 97
    s2Count[rIdx]++
    if (s1Count[rIdx] === s2Count[rIdx]) {
      matches++
    } else if (s1Count[rIdx] + 1 === s2Count[rIdx]) {
      matches--
    }

    const lIdx = s2.charCodeAt(l) - 97
    s2Count[lIdx]--
    if (s1Count[lIdx] === s2Count[lIdx]) {
      matches++
    } else if (s1Count[lIdx] - 1 === s2Count[lIdx]) {
      matches--
    }

    l++
  }

  return matches === 26
}

console.log(checkInclusion('ab', 'eidbaooo')) // true
console.log(checkInclusion('ab', 'eidboaoo')) // false
console.log(checkInclusion('adc', 'dcda')) // true

export { }
