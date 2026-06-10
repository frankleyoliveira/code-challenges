// 507. Perfect Number
// https://leetcode.com/problems/perfect-number/description/

function checkPerfectNumber(num: number): boolean {
  // let sum = 0
  // for (let i = 2; i <= num; i++) {
  //   if (num % i === 0) {
  //     sum += num / i
  //     if (sum > num) {
  //       return false
  //     }
  //   }
  // }
  // return sum === num


  if (num <= 1) return false

  let sum = 1
  const sqrt = Math.sqrt(num)

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i + num / i
      if (sum > num) return false
    }
  }

  return sum === num
}

console.log(checkPerfectNumber(28)) // true
console.log(checkPerfectNumber(7)) // false

export { }
