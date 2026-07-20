// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  let left = 0
  const sortedS1 = s1.split('').sort().join('')

  while (left + s1.length <= s2.length) {
    const windowStr = s2.slice(left, left + s1.length)
    const sorted = windowStr.split('').sort().join('')
    console.log('windowStr', windowStr)
    console.log('sorted', sorted)

    if (sorted === sortedS1) return true

    left++
  }

  return false
}

console.log(checkInclusion('ab', 'eidbaooo')) // true
console.log(checkInclusion('ab', 'eidboaoo')) // false
console.log(checkInclusion('adc', 'dcda')) // true

export { }
