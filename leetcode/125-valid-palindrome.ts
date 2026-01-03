// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

function isAlphanumeric(char: string): boolean {
  // using this function is more performative than regex /[a-z0-9]/i
  const code = char.charCodeAt(0)
  return (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
}

function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++
      continue
    }

    if (!isAlphanumeric(s[right])) {
      right--
      continue
    }

    const charLeft = s[left].toLowerCase()
    const charRight = s[right].toLowerCase()

    left++
    right--

    if (charLeft !== charRight) {
      return false
    }
  }

  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true

console.log(isPalindrome("race a car")) // false

console.log(isPalindrome(" ")) // true

export { }
