// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let curr = root

  while (curr) {
    if (p!.val < curr.val && q!.val < curr.val) {
      curr = curr.left
    } else if (p!.val > curr.val && q!.val > curr.val) {
      curr = curr.right
    } else {
      return curr
    }
  }

  return null
}

let root: TreeNode | null = null
let p: TreeNode | null = null
let q: TreeNode | null = null

root = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
p = createTree([2])
q = createTree([8])
console.log(lowestCommonAncestor(root, p, q)) // 6

root = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
p = createTree([2])
q = createTree([4])
console.log(lowestCommonAncestor(root, p, q)) // 2

root = createTree([2, 1])
p = createTree([2])
q = createTree([1])
console.log(lowestCommonAncestor(root, p, q)) // 2

export { }
