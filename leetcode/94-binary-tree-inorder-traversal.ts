// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 */
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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

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

const tree1 = createTree([1, null, 2, 3])
console.log(inorderTraversal(tree1)) // [1, 3, 2]

const tree2 = createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(inorderTraversal(tree2)) // [4, 2, 6, 5, 7, 1, 3, 9, 8]

export { }
