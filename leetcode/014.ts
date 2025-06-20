// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
  let prefix = ''
  const sortedStrs = strs.sort((a, b) => a.length - b.length)
  const strsToCompare = sortedStrs.splice(1)
  const shortestStr = sortedStrs.join('')

  for (let i = 0; i < shortestStr.length; i++) {
    let shortestStrPrefix = shortestStr[i]

    if (!strsToCompare.every((str) => str[i] === shortestStrPrefix)) {
      return prefix
    }

    prefix += shortestStrPrefix
  }

  return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // fl
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ""
