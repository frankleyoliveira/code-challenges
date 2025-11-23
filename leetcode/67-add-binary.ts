// 67. Add Binary
// https://leetcode.com/problems/add-binary/description/

function addBinary(a: string, b: string): string {
  let idxA = a.length - 1
  let idxB = b.length - 1
  let carry = 0
  let result = ''

  while (idxA >= 0 || idxB >= 0 || carry) {
    const bitA = idxA >= 0 ? +a[idxA] : 0
    const bitB = idxB >= 0 ? +b[idxB] : 0

    const sum = bitA + bitB + carry
    result = String(sum % 2) + result
    carry = Math.floor(sum / 2)
    idxA--
    idxB--
  }

  return result
}

// My first solution: efficient and more performatic, but not very clean...
// function addBinary(a: string, b: string): string {
//   const result: string[] = []
//   let smallest = ''
//   let carry = 0

//   if (a.length > b.length) {
//     result.push(...a.split(''))
//     smallest = b
//   } else {
//     result.push(...b.split(''))
//     smallest = a
//   }

//   for (let i = 1; i <= smallest.length; i++) {
//     const digit1 = +smallest[smallest.length - i]
//     const digit2 = +result[result.length - i]

//     let digitSum = digit1 + digit2 + carry

//     if (digitSum < 2) {
//       carry = 0
//     } else if (digitSum === 2) {
//       carry = 1
//       digitSum = 0
//     } else {
//       digitSum = 1
//     }

//     result[result.length - i] = digitSum.toString()
//   }

//   if (!carry) {
//     return result.join('')
//   }

//   let idx = result.length - smallest.length - 1
//   while (idx >= 0 && carry) {
//     if (result[idx] === '0') {
//       result[idx] = '1'
//       carry = 0
//     } else {
//       result[idx] = '0'
//     }

//     idx--
//   }

//   if (carry) {
//     result.unshift('1')
//   }

//   return result.join('')
// }

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
console.log(addBinary('101111', '10')) // 110001

export { }
