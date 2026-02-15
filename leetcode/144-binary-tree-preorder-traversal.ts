// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

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

function preorderTraversal(root: TreeNode | null): number[] {
  // RECURSIVE SOLUTION
  // if (!root) return []
  // return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]

  // -----------------------------------------------------

  // Follow up: Recursive solution is trivial, could you do it iteratively?

  const result: number[] = [] // 1 - 2 - 4
  const stack = [root] // x1 - x3 - x2 - 5 - 4

  while (stack.length) {
    const last = stack.at(-1)

    if (!last) {
      stack.pop()
      continue
    }

    result.push(last.val)

    let idxToSplice = -1

    if (last.right) {
      stack.push(last.right)
      idxToSplice--
    }

    if (last.left) {
      stack.push(last.left)
      idxToSplice--
    }

    stack.splice(idxToSplice, 1)
  }

  return result

  // A cleaner approach:
  // const result: number[] = []
  // const stack: TreeNode[] = []

  // if (root) stack.push(root)

  // while (stack.length > 0) {
  //   const node = stack.pop()!  // Remove and get last element

  //   result.push(node.val)  // Process root first (preorder!)

  //   // Push right first, then left (so left is processed first)
  //   if (node.right) stack.push(node.right)
  //   if (node.left) stack.push(node.left)
  // }

  // return result
}

const tree1 = createTree([1, null, 2, 3])
console.log(preorderTraversal(tree1)) // [1, 2, 3]

const tree2 = createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(preorderTraversal(tree2)) // [1, 2, 4, 5, 6, 7, 3, 8, 9]

export { }
