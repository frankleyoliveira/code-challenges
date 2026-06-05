// 455. Assign Cookies
// https://leetcode.com/problems/assign-cookies/description

function findContentChildren(g: number[], s: number[]): number {
  if (!s.length) return 0

  let count = 0
  let gIdx = 0
  let sIdx = 0

  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  while (sIdx < s.length && gIdx < g.length) {
    if (g[gIdx] <= s[sIdx]) {
      count++
      gIdx++
    }
    sIdx++
  }

  return count
}

console.log(findContentChildren([1, 2, 3], [1, 1])) // 1

console.log(findContentChildren([1, 2], [1, 2, 3])) // 2

export { }
