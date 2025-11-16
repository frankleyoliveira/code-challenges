// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/description/

const romanNumsMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
])

const subtractors = new Map([
  ['M', 'C'],
  ['D', 'C'],
  ['C', 'X'],
  ['L', 'X'],
  ['X', 'I'],
  ['V', 'I'],
])

function romanToInt(s: string): number {
  let num = 0
  let last = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (subtractors.get(last) === s[i]) {
      num -= romanNumsMap.get(s[i])!
    } else {
      num += romanNumsMap.get(s[i])!
    }
    last = s[i]
  }

  return num
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('XC'))

export { }