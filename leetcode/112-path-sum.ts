// 112. Path Sum
// https://leetcode.com/problems/path-sum/description/

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

function hasPathSum(root: TreeNode | null, targetSum: number, currentSum = 0): boolean {
  if (!root) {
    return false
  }

  if (!root.left && !root.right) {
    return targetSum === currentSum + root.val
  }

  const left = hasPathSum(root.left, targetSum, currentSum + root.val)
  const right = hasPathSum(root.right, targetSum, currentSum + root.val)

  return left || right
}

const root1 = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
console.log(hasPathSum(root1, 22)) // true

const root2 = createTree([1, 2, 3])
console.log(hasPathSum(root2, 5)) // false

const root3 = createTree([])
console.log(hasPathSum(root3, 0)) // false

const root4 = createTree([1, 2])
console.log(hasPathSum(root4, 1)) // false

const root5 = createTree([-2, null, -3])
console.log(hasPathSum(root5, -5)) // true

export { }
