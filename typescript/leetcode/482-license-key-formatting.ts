// 482. License Key Formatting
// https://leetcode.com/problems/license-key-formatting/description

function licenseKeyFormatting(s: string, k: number): string {
  const initialFormat = s.replaceAll('-', '').toUpperCase()
  let result = ''
  let count = 0
  for (let i = initialFormat.length - 1; i >= 0; i--) {
    result = initialFormat[i] + result
    count++
    if (count === k && i > 0) {
      result = '-' + result
      count = 0
    }
  }
  return result
}

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4)) // 5F3Z-2E9W
console.log(licenseKeyFormatting('2-5g-3-J', 2)) // 2-5G-3J
console.log(licenseKeyFormatting('-', 1)) // ''

export { }
