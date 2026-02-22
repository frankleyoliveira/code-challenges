// 171. Excel Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number/description/

function titleToNumber(columnTitle: string): number {
  const length = columnTitle.length
  let sum = 0

  for (let i = 0; i < length; i++) {
    const value = columnTitle.charCodeAt(length - 1 - i) - 64
    const result = value * Math.pow(26, i)
    sum += result
  }

  return sum
}

console.log(titleToNumber('A')) // 1
console.log(titleToNumber('AB')) // 28
console.log(titleToNumber('ZY')) // 701
console.log(titleToNumber('AAA')) // 703

export { }
