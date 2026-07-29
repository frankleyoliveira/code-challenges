// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

import { createLinkedList, linkedListToArray } from "./utils"

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head)

  let l = dummy
  let r = head

  for (let i = 0; i < n; i++) {
    r = r!.next
  }

  while (r) {
    r = r.next
    l = l.next!
  }

  l.next = l.next!.next

  return dummy.next
}

const l1 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(removeNthFromEnd(l1, 2))) // [1,2,3,5]

const l2 = createLinkedList([1])
console.log(linkedListToArray(removeNthFromEnd(l2, 1))) // []

const l3 = createLinkedList([1, 2])
console.log(linkedListToArray(removeNthFromEnd(l3, 1))) // [1]

export { }
