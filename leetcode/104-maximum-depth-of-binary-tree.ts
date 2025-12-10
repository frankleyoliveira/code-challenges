// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

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

function maxDepth(root: TreeNode | null, currentDepth = 0): number {
  if (!root) {
    return currentDepth
  }

  const leftDepth = maxDepth(root.left, currentDepth + 1)
  const rightDepth = maxDepth(root.right, currentDepth + 1)

  return Math.max(leftDepth, rightDepth)
}

const root1 = createTree([3, 9, 20, null, null, 15, 7])
console.log(maxDepth(root1)) // 3

const root2 = createTree([1, null, 2])
console.log(maxDepth(root2)) // 2

export { }
