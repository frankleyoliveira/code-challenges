// 222. Count Complete Tree Nodes
// https://leetcode.com/problems/count-complete-tree-nodes/description/

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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  return 1 + countNodes(root.left) + countNodes(root.right)
}

const tree1 = createTree([1, 2, 3, 4, 5, 6])
console.log(countNodes(tree1)) // 6

const tree2 = createTree([])
console.log(countNodes(tree2)) // 0

const tree3 = createTree([1])
console.log(countNodes(tree3)) // 1

const tree4 = createTree([1, 2, 3, 4])
console.log(countNodes(tree4)) // 4

export { }
