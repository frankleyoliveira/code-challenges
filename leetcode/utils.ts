class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// Helper function: Create tree from array (level-order)
export function createTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null

  const root = new TreeNode(arr[0])
  const queue: TreeNode[] = [root]
  let i = 1

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift()!

    // Left child
    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]!)
      queue.push(current.left)
    }
    i++

    // Right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]!)
      queue.push(current.right)
    }
    i++
  }

  return root
}

// Helper: Create linked list with cycle
export function createLinkedListWithCycle(values: number[], pos: number): ListNode | null {
  if (values.length === 0) return null

  // Create all nodes
  const nodes: ListNode[] = []
  for (let val of values) {
    nodes.push(new ListNode(val))
  }

  // Link nodes together
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  // Create cycle if pos >= 0
  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos]  // Last node points to pos
  }

  return nodes[0]  // Return head
}