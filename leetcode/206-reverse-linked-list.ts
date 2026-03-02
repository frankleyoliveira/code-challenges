// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

import { createLinkedList, linkedListToArray } from "./utils"

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let current = head
  let newHead: ListNode | null = null
  while (current !== null) {
    const node: ListNode = new ListNode(current.val, newHead)
    newHead = node
    current = current.next
  }

  return newHead
}

const ll1 = createLinkedList([1, 2, 3, 4, 5])
const reversed1 = reverseList(ll1)
console.log(linkedListToArray(reversed1)) // [5, 4, 3, 2, 1]

const ll2 = createLinkedList([1, 2])
const reversed2 = reverseList(ll2)
console.log(linkedListToArray(reversed2)) // [2, 1]

const ll3 = createLinkedList([])
const reversed3 = reverseList(ll3)
console.log(linkedListToArray(reversed3)) // []

export { }
