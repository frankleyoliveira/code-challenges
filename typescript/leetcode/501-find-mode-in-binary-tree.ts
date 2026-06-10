// 501. Find Mode in Binary Search Tree
// https://leetcode.com/problems/find-mode-in-binary-search-tree/description

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

function findMode(root: TreeNode | null): number[] {
  const counts = new Map<number, number>()

  const traverse = (node: TreeNode | null): void => {
    if (!node) return
    counts.set(node.val, (counts.get(node.val) ?? 0) + 1)
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  const max = Math.max(...counts.values())
  return [...counts.entries()]
    .filter(([_, count]) => count === max)
    .map(([val]) => val)
}

const tree1 = createTree([1, null, 2, 2])
console.log(findMode(tree1)) // [2]

const tree2 = createTree([0])
console.log(findMode(tree2)) // [0]

export { }
