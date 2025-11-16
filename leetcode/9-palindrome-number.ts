// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

// My initial solution
// function isPalindrome(x: number): boolean {
//   const xStr = x.toString()
//   const xArr: string[] = []

//   for (let i = xStr.length - 1; i >= 0; i--) {
//     xArr.push(xStr[i])
//   }

//   return xArr.join("") === xStr
// }

// ############################################

// Follow up: Could you solve it without converting the integer to a string?
function isPalindrome(x: number): boolean {
  if (x < 0) return false
  if (x < 10) return true

  let reversed = 0
  let remainder = x
  const digits = Math.floor(Math.log10(x) + 1)

  for (let i = digits; i > 0; i--) {
    const lastDigit = remainder % 10
    reversed += lastDigit * 10 ** (i - 1)
    remainder = (remainder - lastDigit) / 10
  }

  return x === reversed
}
// I think it was a creative solution without converting the int to string
// but it's less performatic than the initial solution

// ############################################

// best and more performatic solution from leetcode:
// function isPalindrome(x: number): boolean {
//   if (x < 0) return false

//   let xCopy = x
//   let total = 0

//   while (xCopy > 0) {
//     const remainder = xCopy % 10
//     total = total * 10 + remainder
//     xCopy = Math.floor(xCopy / 10)
//   }

//   return x === total
// }

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(121)) // true

export { }