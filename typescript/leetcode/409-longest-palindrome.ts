// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/description/

function longestPalindrome(s: string): number {
  const charMap = new Map<string, number>()
  let counter = 0
  let hasOdd = false

  for (let i = 0; i < s.length; i++) {
    const current = charMap.get(s[i]) || 0
    charMap.set(s[i], current + 1)
  }

  for (let value of charMap.values()) {
    if (value % 2 === 0) {
      counter += value
    } else {
      counter += value - 1
      hasOdd = true
    }
  }

  return counter + (hasOdd ? 1 : 0)
}

console.log(longestPalindrome('abccccdd')) // 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

console.log(longestPalindrome('a')) // 1


export { }
