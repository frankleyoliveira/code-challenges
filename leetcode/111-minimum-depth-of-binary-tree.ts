// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

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

function minDepth(root: TreeNode | null, currentDepth = 0): number {
  if (!root) return currentDepth
  if (!root.left && !root.right) return currentDepth + 1

  let leftDepth = Infinity
  let rightDepth = Infinity

  if (root.left) {
    leftDepth = minDepth(root.left, currentDepth + 1)
  }

  if (root.right) {
    rightDepth = minDepth(root.right, currentDepth + 1)
  }

  return Math.min(leftDepth, rightDepth)
}

const root1 = createTree([3, 9, 20, null, null, 15, 7])
console.log(minDepth(root1)) // 2

const root2 = createTree([2, null, 3, null, 4, null, 5, null, 6])
console.log(minDepth(root2)) // 5

export { }
