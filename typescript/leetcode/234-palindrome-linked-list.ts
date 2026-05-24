// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/description/

import { createLinkedList } from './utils'


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// My first solution - not O(1) space
// function isPalindrome(head: ListNode | null): boolean {
//   if (!head) {
//     return true
//   }

//   const arr = [head.val]
//   let current = head.next

//   while (current) {
//     arr.push(current.val)
//     current = current.next
//   }

//   let l = 0
//   let r = arr.length - 1

//   while (l < r) {
//     if (arr[l] !== arr[r]) {
//       return false
//     }
//     l++
//     r--
//   }

//   return true
// }

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true

  // 1. Find the middle (slow ends at the start of the second half)
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  // 2. Reverse the second half in place
  let prev: ListNode | null = null
  let curr: ListNode | null = slow
  while (curr) {
    const next: ListNode | null = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  // 3. Compare the two halves
  let left: ListNode | null = head
  let right: ListNode | null = prev   // head of the reversed second half
  while (right) {
    if (left!.val !== right.val) return false
    left = left!.next
    right = right.next
  }

  return true
}

const ll1 = createLinkedList([1, 2, 2, 1])
console.log(isPalindrome(ll1)) // true

const ll2 = createLinkedList([1, 2])
console.log(isPalindrome(ll2)) // false


export { }
