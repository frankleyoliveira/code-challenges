// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  let currentLevel = root ? [root] : []
  let nextLevel: TreeNode[] = []

  while (currentLevel.length) {
    let levelResult: number[] = []
    for (let i = 0; i < currentLevel.length; i++) {
      levelResult.push(currentLevel[i].val)
      if (currentLevel[i].left) {
        nextLevel.push(currentLevel[i].left!)
      }
      if (currentLevel[i].right) {
        nextLevel.push(currentLevel[i].right!)
      }
    }
    result.push(levelResult)
    currentLevel = nextLevel
    nextLevel = []
  }

  return result
}

let root1 = createTree([3, 9, 20, null, null, 15, 7])
console.log(levelOrder((root1))) // [[3],[9,20],[15,7]]

let root2 = createTree([1])
console.log(levelOrder(root2)) // [[1]]

let root3 = createTree([])
console.log(levelOrder(root3)) // []

export { }
