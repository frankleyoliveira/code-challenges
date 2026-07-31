// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/description/

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

function isValidBST(root: TreeNode | null): boolean {
  const validateBST = (root: TreeNode | null, minLeft = -Infinity, maxRight = Infinity): boolean => {
    if (!root) return true

    if (root.left) {
      if (root.left.val >= root.val || root.left.val <= minLeft) return false
    }

    if (root.right) {
      if (root.right.val <= root.val || root.right.val >= maxRight) return false
    }

    return validateBST(root.left, minLeft, root.val) && validateBST(root.right, root.val, maxRight)
  }

  return validateBST(root)
}

let root1 = createTree([2, 1, 3])
console.log(isValidBST(root1)) // true

let root2 = createTree([5, 1, 4, null, null, 3, 6])
console.log(isValidBST(root2)) // false

let root3 = createTree([5, 4, 6, null, null, 3, 7])
console.log(isValidBST(root3)) // false

let root4 = createTree([45, 42, null, null, 44, 43, null, 41])
console.log(isValidBST(root4)) // false

export { }
