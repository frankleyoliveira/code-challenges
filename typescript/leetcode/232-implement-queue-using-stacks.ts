// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description/

class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  push(x: number): void {
    this.stack1.push(x)
    console.log('push', x, this.stack1)
  }

  pop(): number {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!)
      }
    }

    return this.stack2.pop()!
  }

  peek(): number {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2[this.stack2.length - 1]
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0
  }
}

const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false

export { }
