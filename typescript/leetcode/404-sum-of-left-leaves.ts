// 404. Sum of Left Leaves
// https://leetcode.com/problems/sum-of-left-leaves/description

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

function sumOfLeftLeaves(root: TreeNode | null, isLeft = false): number {
  if (!root) return 0

  if (!root.left && !root.right) {
    return isLeft ? root.val : 0
  }

  const sumLeft = sumOfLeftLeaves(root.left, true)
  const sumRight = sumOfLeftLeaves(root.right)

  return sumLeft + sumRight
}

const tree1 = createTree([3, 9, 20, null, null, 15, 7])
console.log(sumOfLeftLeaves(tree1)) // 24

const tree2 = createTree([1])
console.log(sumOfLeftLeaves(tree2)) // 0

export { }
