// 168. Excel Sheet Column Title
// https://leetcode.com/problems/excel-sheet-column-title/description/

function convertToTitle(columnNumber: number): string {
  const cols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let num = columnNumber
  let result = ''

  while (num > 0) {
    num--
    const idx = num % 26
    result = cols[idx] + result
    num = Math.floor(num / 26)
  }

  return result
}


console.log(convertToTitle(1)) // A
console.log(convertToTitle(28)) // AB
console.log(convertToTitle(701)) // ZY
console.log(convertToTitle(703)) // AAA

export { }
