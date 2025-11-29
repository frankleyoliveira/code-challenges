// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }


  if (head.next?.val === head.val) {
    return deleteDuplicates(head.next)
  }

  return new ListNode(head.val, deleteDuplicates(head.next))
}

// Helper function: Create linked list from array
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  let head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

// Helper function: Convert linked list to array (for easy viewing)
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head

  while (current !== null) {
    result.push(current.val)
    current = current.next
  }

  return result
}

const test1 = createLinkedList([1, 1, 2])
const result1 = deleteDuplicates(test1)
console.log(linkedListToArray(result1)) // [1, 2]

const test2 = createLinkedList([1, 1, 2, 3, 3])
const result2 = deleteDuplicates(test2)
console.log(linkedListToArray(result2)) // [1, 2, 3]

const test3 = createLinkedList([1, 1, 1])
const result3 = deleteDuplicates(test3)
console.log(linkedListToArray(result3)) // [1]

export { }
