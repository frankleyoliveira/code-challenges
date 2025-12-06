// 100. Same Tree
// https://leetcode.com/problems/same-tree/description/

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


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true
  }

  if (p?.val === q?.val) {
    const pLeft = p?.left || null
    const qLeft = q?.left || null
    const pRight = p?.right || null
    const qRight = q?.right || null
    return isSameTree(pLeft, qLeft) && isSameTree(pRight, qRight)
  }

  return false
}

// Helper function: Create tree from array (level-order)
function createTree(arr: (number | null)[]): TreeNode | null {
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

const p1 = createTree([1, 2, 3])
const q1 = createTree([1, 2, 3])
console.log(isSameTree(p1, q1)) // true

const p2 = createTree([1, 2])
const q2 = createTree([1, null, 2])
console.log(isSameTree(p2, q2)) // false

const p3 = createTree([1, 2, 1])
const q3 = createTree([1, 1, 2])
console.log(isSameTree(p3, q3)) // false

const p4 = createTree([])
const q4 = createTree([0])
console.log(isSameTree(p4, q4)) // false



export { }
