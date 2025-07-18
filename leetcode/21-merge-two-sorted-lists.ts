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
  if (!list1) return list2
  if (!list2) return list1

  const mergedList = new ListNode(-1)
  let tail = mergedList
  let l1Ref = list1
  let l2Ref = list2

  while (true) {
    if (l1Ref.val <= l2Ref.val) {
      tail.next = new ListNode(l1Ref.val)
      tail = tail.next

      if (l1Ref.next === null) {
        tail.next = new ListNode(l2Ref.val)

        if (l2Ref.next !== null) {
          tail = tail.next
          tail.next = l2Ref.next
        }

        break
      }

      l1Ref = l1Ref.next
    } else {
      tail.next = new ListNode(l2Ref.val)
      tail = tail.next

      if (l2Ref.next === null) {
        tail.next = new ListNode(l1Ref.val)

        if (l1Ref.next !== null) {
          tail = tail.next
          tail.next = l1Ref.next
        }

        break
      }

      l2Ref = l2Ref.next
    }
  }

  return mergedList.next
}

const ln1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const ln2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const ln3 = new ListNode()

console.log('test 1:', mergeTwoLists(ln1, ln2))
console.log('test 2:', mergeTwoLists(ln3, ln3))
console.log('test 3:', mergeTwoLists(null, null))
console.log('test 4:', mergeTwoLists(ln3, null))
