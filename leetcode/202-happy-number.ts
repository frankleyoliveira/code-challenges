// 202. Happy Number
// https://leetcode.com/problems/happy-number/description/

function isHappy(n: number): boolean {
  let numStr = n.toString()
  const currentSums = new Set()
  while (numStr !== '1') {
    let sum = 0
    for (let i = 0; i < numStr.length; i++) {
      sum += (+numStr[i]) ** 2
    }
    if (currentSums.has(sum)) {
      return false
    }
    currentSums.add(sum)
    numStr = sum.toString()
  }

  return true
}

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false

export { }
