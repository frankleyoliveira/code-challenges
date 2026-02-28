// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/description/

import { createLinkedList, linkedListToArray } from "./utils"


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head
  let newHead: ListNode | null = null
  let newCurrent: ListNode | null = null

  while (current !== null) {
    if (current.val !== val) {
      if (newHead === null) {
        newHead = new ListNode(current.val)
        newCurrent = newHead
      } else {
        newCurrent!.next = new ListNode(current.val)
        newCurrent = newCurrent!.next
      }
    }
    current = current.next
  }

  return newHead
}

const ll1 = createLinkedList([1, 2, 6, 3, 4, 5, 6])
console.log(linkedListToArray(removeElements(ll1, 6))) // [1,2,3,4,5]

const ll2 = createLinkedList([])
console.log(linkedListToArray(removeElements(ll2, 1))) // []

const ll3 = createLinkedList([7, 7, 7, 7])
console.log(linkedListToArray(removeElements(ll3, 7))) // []

export { }
