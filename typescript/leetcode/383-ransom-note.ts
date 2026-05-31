// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/description

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false

  const noteArr = ransomNote.split('')
  const magazineArr = magazine.split('')

  for (let i = 0; i < noteArr.length; i++) {
    const magazineIdx = magazineArr.findIndex(item => item === noteArr[i])
    if (magazineIdx === -1) {
      return false
    }
    magazineArr.splice(magazineIdx, 1)
  }

  return true
}

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'aab')) // true

export { }
