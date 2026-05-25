// 258. Add Digits
// https://leetcode.com/problems/add-digits/description

function addDigits(num: number): number {
  // let result = num
  // while (result > 9) {
  //   const digits = result.toString().split('')
  //   result = digits.reduce((sum, curr) => sum + +curr, 0)
  // }

  // return result

  return num % 9 || (num > 0 ? 9 : 0)
}

console.log(addDigits(38)) // 2 (38 -> 3 + 8 -> 11 -> 1 + 1 -> 2)
console.log(addDigits(0)) // 0
console.log(addDigits(18)) // 9

export { }
