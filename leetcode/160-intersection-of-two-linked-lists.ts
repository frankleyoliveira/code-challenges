// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let nodeA = headA
  const aSet = new Set()

  while (nodeA) {
    aSet.add(nodeA)
    nodeA = nodeA.next
  }

  let nodeB = headB
  while (nodeB) {
    if (aSet.has(nodeB)) {
      return nodeB
    }
    nodeB = nodeB.next
  }

  return null
}

// Helper: Create linked list from array
function createList(values: number[]): ListNode | null {
  if (values.length === 0) return null

  const head = new ListNode(values[0])
  let current = head

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next
  }

  return head
}

// Helper: Get node at specific index
function getNodeAt(head: ListNode | null, index: number): ListNode | null {
  let current = head
  for (let i = 0; i < index && current; i++) {
    current = current.next
  }
  return current
}

// Helper: Create intersecting lists
function createIntersectingLists(
  listAValues: number[],
  listBValues: number[],
  skipA: number,
  skipB: number
): [ListNode | null, ListNode | null] {

  // Create both lists independently
  const headA = createList(listAValues)
  const headB = createList(listBValues)

  // If skipA equals length of A, no intersection
  if (skipA >= listAValues.length || skipB >= listBValues.length) {
    return [headA, headB]
  }

  // Get the node where intersection should happen in list A
  const intersectNode = getNodeAt(headA, skipA)

  // Find the node in list B just before where it should intersect
  const beforeIntersectB = getNodeAt(headB, skipB - 1)

  // Make list B point to the intersection node from list A
  if (beforeIntersectB && intersectNode) {
    beforeIntersectB.next = intersectNode
  }

  return [headA, headB]
}

// TEST CASES

const [list1A, list1B] = createIntersectingLists(
  [4, 1, 8, 4, 5],
  [5, 6, 1, 8, 4, 5],
  2,  // skipA
  3   // skipB
)
const result1 = getIntersectionNode(list1A, list1B)
console.log(result1?.val || null) // 8

const [list2A, list2B] = createIntersectingLists(
  [1, 9, 1, 2, 4],
  [3, 2, 4],
  3,  // skipA
  1   // skipB
)
const result2 = getIntersectionNode(list2A, list2B)
console.log(result2?.val || null) // 2

const [list3A, list3B] = createIntersectingLists(
  [2, 6, 4],
  [1, 5],
  3,  // skipA (>= length, so no intersection)
  2   // skipB
)
const result3 = getIntersectionNode(list3A, list3B)
console.log(result3?.val || null) // null

const [list4A, list4B] = createIntersectingLists(
  [1, 2, 3],
  [4, 5, 1, 2, 3],
  0,  // Lists intersect immediately at head of A
  2
)
const result4 = getIntersectionNode(list4A, list4B)
console.log(result4?.val || null) // 1


export { }
