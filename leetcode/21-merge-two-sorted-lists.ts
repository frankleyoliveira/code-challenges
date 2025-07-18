// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/description/

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const mergedList = new ListNode(-1)
  let tail = mergedList

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }

    tail = tail.next
  }

  tail.next = list1 !== null ? list1 : list2

  return mergedList.next
}

const ln1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const ln2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const ln3 = new ListNode()

console.log('test 1:', mergeTwoLists(ln1, ln2))
console.log('test 2:', mergeTwoLists(ln3, ln3))
console.log('test 3:', mergeTwoLists(null, null))
console.log('test 4:', mergeTwoLists(ln3, null))
