// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height: number[]): number {
  let max = 0
  let l = 0
  let r = height.length - 1

  while (l < r) {
    const width = r - l
    const area = Math.min(height[l], height[r]) * width

    if (area > max) {
      max = area
    }

    if (height[r] < height[l]) {
      r++
    } else {
      l++
    }
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1

export { }
