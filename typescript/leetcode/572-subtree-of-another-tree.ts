// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/description/

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // if (!root && !subRoot) {
  //   return true
  // }

  // if (!root || !subRoot) {
  //   return false
  // }

  // const isIdentical = (t: TreeNode | null, s: TreeNode | null): boolean => {
  //   if (!t && !s) {
  //     return true
  //   }

  //   if (!t || !s) {
  //     return false
  //   }

  //   return t.val === s.val && isIdentical(t.left, s.left) && isIdentical(t.right, s.right)
  // }

  // if (isIdentical(root, subRoot)) {
  //   return true
  // }

  // return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

  // OPTIMEZED SOLUTION
  const serialize = (node: TreeNode | null): string =>
    node ? `${node.val} ${serialize(node.left)} ${serialize(node.right)}` : "#"

  return serialize(root).includes(serialize(subRoot))
}

const root1 = createTree([3, 4, 5, 1, 2])
const subRoot1 = createTree([4, 1, 2])
console.log(isSubtree(root1, subRoot1)) // true

const root2 = createTree([3, 4, 5, 1, 2, null, null, null, null, 0])
const subRoot2 = createTree([4, 1, 2])
console.log(isSubtree(root2, subRoot2)) // false

const root3 = createTree([1, 1])
const subRoot3 = createTree([1])
console.log(isSubtree(root3, subRoot3)) // true

const root4 = createTree([3, 4, 5, 1, null, 2])
const subRoot4 = createTree([3, 1, 2])
console.log(isSubtree(root4, subRoot4)) // false

const root5 = createTree([1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
const subRoot5 = createTree([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
console.log(isSubtree(root5, subRoot5)) // true

export { }
