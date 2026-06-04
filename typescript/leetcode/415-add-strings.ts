// 415. Add Strings
// https://leetcode.com/problems/add-strings/description

function addStrings(num1: string, num2: string): string {
  let result = ''
  let lastIdx1 = num1.length - 1
  let lastIdx2 = num2.length - 1
  let carry = 0

  while (lastIdx1 >= 0 || lastIdx2 >= 0) {
    const digit1 = +num1[lastIdx1] || 0
    const digit2 = +num2[lastIdx2] || 0

    let sum = digit1 + digit2 + carry

    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }

    result = sum + result

    lastIdx1--
    lastIdx2--
  }

  return carry ? '1' + result : result
}

console.log(addStrings('11', '123')) // 134
console.log(addStrings('456', '77')) // 533
console.log(addStrings('0', '0')) // 0

export { }
