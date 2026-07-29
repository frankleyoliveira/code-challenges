// 143. Reorder List
// https://leetcode.com/problems/reorder-list/description/

import { createLinkedList, linkedListToArray } from "./utils"

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 Do not return anything, modify head in-place instead.
 */

function reorderList(head: ListNode | null): void {
  let slow = head
  let fast = head!.next
  while (fast && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next
  }
  // slow = mid of the list

  let second = slow!.next
  let prev = null
  slow!.next = null // break link from first half
  while (second !== null) {
    const tmp = second.next
    second.next = prev
    prev = second
    second = tmp
  }
  // prev = reversed right portion


  let first = head
  second = prev
  while (second) {
    const tmp1 = first!.next
    const tmp2 = second.next
    first!.next = second
    second.next = tmp1
    first = tmp1
    second = tmp2
  }
}

const l1 = createLinkedList([1, 2, 3, 4])
reorderList(l1)
console.log(linkedListToArray(l1)) // [1,4,2,3]

const l2 = createLinkedList([1, 2, 3, 4, 5])
reorderList(l2)
console.log(linkedListToArray(l2)) // [1,5,2,4,3]

export { }
