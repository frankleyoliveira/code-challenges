// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

// My initial solution
function isPalindrome(x: number): boolean {
  const xStr = x.toString()
  const xArr: string[] = []

  for (let i = xStr.length - 1; i >= 0; i--) {
    xArr.push(xStr[i])
  }

  return xArr.join("") === xStr
}

// Follow up: Could you solve it without converting the integer to a string?

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(121)) // true
