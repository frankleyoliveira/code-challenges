// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

import { createTree } from './utils'

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

function kthSmallest(root: TreeNode | null, k: number): number {
  const fillValues = (node: TreeNode | null): number[] => {
    if (node === null) {
      return []
    }

    return [...fillValues(node.left), node.val, ...fillValues(node.right)]
  }

  const values = fillValues(root!.left)

  if (values.length < k) {
    values.push(...[root!.val, ...fillValues(root!.right)])
  }

  return values[k - 1]
}

const root1 = createTree([3, 1, 4, null, 2])
console.log(kthSmallest(root1, 1)) // 1

const root2 = createTree([5, 3, 6, 2, 4, null, null, 1])
console.log(kthSmallest(root2, 3)) // 3

console.log() // result

export { }
