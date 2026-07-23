// 155. Min Stack
// https://leetcode.com/problems/min-stack/description/

class MinStack {
  private stack: number[] = []
  private minStack: number[] = []

  push(value: number): void {
    this.stack.push(value)
    const min = Math.min(this.minStack[this.minStack.length - 1] ?? value, value)
    this.minStack.push(min)
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

const minStack = new MinStack()
minStack.push(1)
minStack.push(2)
minStack.push(0)
console.log(minStack.getMin()) // return 0
minStack.pop()
console.log(minStack.top()) // return 2
console.log(minStack.getMin()) // return 1

console.log() // result

export { }
