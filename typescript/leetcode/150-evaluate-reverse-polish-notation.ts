// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (["+", "-", "*", "/"].includes(tokens[i])) {
      const n2 = stack.pop()!
      const n1 = stack.pop()!

      if (tokens[i] === "+") {
        stack.push(n1 + n2)
      } else if (tokens[i] === '-') {
        stack.push(n1 - n2)
      } else if (tokens[i] === '*') {
        stack.push(n1 * n2)
      } else { // divsion
        stack.push(Math.trunc(n1 / n2))
      }
    } else {
      stack.push(+tokens[i])
    }
  }

  return stack[0]
}

console.log(evalRPN(["2", "1", "+", "3", "*"])) // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])) // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])) // 22

export { }
