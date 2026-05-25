// 257. Binary Tree Paths
// https://leetcode.com/problems/binary-tree-paths/description/

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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return [""]

  let result: string[] = []

  if (root.left) {
    result = binaryTreePaths(root.left).map(item => `${root.val}->${item}`)
  }
  if (root.right) {
    result = result.concat(binaryTreePaths(root.right).map(item => `${root.val}->${item}`))
  }

  return result.length ? result : [root.val.toString()]
}

const tree1 = createTree([1, 2, 3, null, 5])
console.log(binaryTreePaths(tree1)) // ["1->2->5","1->3"]

const tree2 = createTree([1])
console.log(binaryTreePaths(tree2)) // ["1"]

export { }
