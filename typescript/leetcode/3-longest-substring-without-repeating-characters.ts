// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
  let max = 0
  let left = 0
  const charSet = new Set<string>()

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left])
      left++
    }

    charSet.add(s[right])
    max = Math.max(max, charSet.size)
  }

  return max
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("aab")) // 2
console.log(lengthOfLongestSubstring("dvdf")) // 3
console.log(lengthOfLongestSubstring("qrsvbspk")) // 5

export { }
