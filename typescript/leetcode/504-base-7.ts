// 504. Base 7
// https://leetcode.com/problems/base-7/description

function convertToBase7(num: number): string {
  if (num === 0) return '0'

  let divider = Math.abs(num)
  let base7 = ''

  while (divider > 0) {
    const reminder = divider % 7
    base7 = reminder + base7

    divider = Math.floor(divider / 7)
  }

  if (num < 0) {
    base7 = '-' + base7
  }

  return base7
}

console.log(convertToBase7(100)) // "202"
console.log(convertToBase7(-7)) // "-10"

export { }
