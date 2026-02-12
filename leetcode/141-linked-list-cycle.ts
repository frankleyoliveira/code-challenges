// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/

import { createLinkedListWithCycle } from "./utils"

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }

  return false
}

const ll1 = createLinkedListWithCycle([3, 2, 0, -4], 1)
console.log(hasCycle(ll1)) // true

const ll2 = createLinkedListWithCycle([1, 2], 0)
console.log(hasCycle(ll2)) // true

const ll3 = createLinkedListWithCycle([1], -1)
console.log(hasCycle(ll3)) // false

export { }
