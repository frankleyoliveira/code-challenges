// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/description/

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  const leftRightDepth = (innerRoot: TreeNode | null): number => {
    if (!innerRoot) return 0

    let left = leftRightDepth(innerRoot.left)
    let right = leftRightDepth(innerRoot.right)

    max = Math.max(max, left + right)

    return Math.max(left, right) + 1
  }

  leftRightDepth(root)

  return max
}

const tree1 = createTree([1, 2, 3, 4, 5])
console.log(diameterOfBinaryTree(tree1)) // 3

const tree2 = createTree([1, 2])
console.log(diameterOfBinaryTree(tree2)) // 1

const tree3 = createTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2])
console.log(diameterOfBinaryTree(tree3)) // 8

export { }
