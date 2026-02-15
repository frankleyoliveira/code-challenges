// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

import { createTree } from "./utils"

/**
 * Definition for a binary tree node.
 */
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

function postorderTraversal(root: TreeNode | null): number[] {
  // RECURSIVE SOLUTION

  // if (!root) return []
  // return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]

  // -----------------------------------------------------

  // Follow up: Recursive solution is trivial, could you do it iteratively?

  const result: number[] = []
  const stack: TreeNode[] = []

  if (root) stack.push(root)

  while (stack.length) {
    const node = stack.shift()!

    result.unshift(node.val)

    if (node.left) stack.unshift(node.left)
    if (node.right) stack.unshift(node.right)
  }

  return result
}

const tree1 = createTree([1, null, 2, 3])
console.log(postorderTraversal(tree1)) // [3, 2, 1]

const tree2 = createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(postorderTraversal(tree2)) // [4, 6, 7, 5, 2, 9, 8, 3, 1]

export { }
