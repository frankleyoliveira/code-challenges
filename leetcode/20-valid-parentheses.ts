// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/description/

// My first solution
// function isValidx(s: string): boolean {
//   const pOpen = ['(', '[', '{']
//   const pClose = [')', ']', '}']
//   const stack: number[] = []

//   for (const c of s) {
//     const openIdx = pOpen.findIndex((p) => p === c)
//     if (openIdx !== -1) {
//       stack.push(openIdx)
//     } else {
//       const closeIdx = pClose.findIndex((p) => p === c)
//       if (stack.pop() !== closeIdx) {
//         return false
//       }
//     }
//   }

//   return stack.length === 0
// }

// refactored version
function isValid(s: string): boolean {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack: ('(' | '[' | '{')[] = []

  for (const c of s) {
    if (c in pairs) {
      // @ts-ignore
      stack.push(c)
    } else {
      const key = stack.pop()
      if (!key || pairs[key] !== c) return false
    }
  }

  return stack.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([])')) // true
