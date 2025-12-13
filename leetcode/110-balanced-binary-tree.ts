// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/description/

import { createTree } from "./utils"

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

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true

  const maxDepth = (root: TreeNode | null, currentDepth = 0): number => {
    if (!root) return currentDepth

    const leftDepth = maxDepth(root.left, currentDepth + 1)
    const rightDepth = maxDepth(root.right, currentDepth + 1)

    return Math.max(leftDepth, rightDepth)
  }

  const leftNode = root?.left || null
  const rightNode = root?.right || null

  const leftDepth = maxDepth(leftNode)
  const rightDepth = maxDepth(rightNode)

  const isCurrentlyBalanced = (leftDepth - rightDepth > -2) && (leftDepth - rightDepth < 2)
  if (!isCurrentlyBalanced) return false

  return isBalanced(leftNode) && isBalanced(rightNode)
};

const root1 = createTree([3, 9, 20, null, null, 15, 7])
console.log(isBalanced(root1)) // true

const root2 = createTree([1, 2, 2, 3, 3, null, null, 4, 4])
console.log(isBalanced(root2)) // false

const root3 = createTree([])
console.log(isBalanced(root3)) // true

const root4 = createTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4])
console.log(isBalanced(root4)) // false

export { }
