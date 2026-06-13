// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/description/

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0

  const sums: number[] = []

  const leftRightDepth = (innerRoot: TreeNode | null): [number, number] => {
    // console.log('parentRoot', innerRoot)
    if (!innerRoot) return [0, 0]

    let leftL = 0
    let leftR = 0
    let rightL = 0
    let rightR = 0

    if (innerRoot.left) {
      // console.log('if left');
      [leftL, leftR] = leftRightDepth(innerRoot.left)
      leftL++
      leftR++
    }

    if (innerRoot.right) {
      // console.log('if right');
      [rightL, rightR] = leftRightDepth(innerRoot.right)
      rightL++
      rightR++
    }

    // console.log('innerRoot', innerRoot)
    // console.log('leftL', leftL)
    // console.log('leftR', leftR)
    // console.log('rightL', rightL)
    // console.log('rightR', rightR)
    // console.log('---');

    const maxL = Math.max(leftL, leftR)
    const maxR = Math.max(rightL, rightR)

    sums.push(maxL + maxR)
    return [maxL, maxR]
  }

  const depths = leftRightDepth(root)
  // console.log('depths', depths)

  return Math.max(...sums)
  // return depths[0] + depths[1]
}

const tree1 = createTree([1, 2, 3, 4, 5])
console.log(diameterOfBinaryTree(tree1)) // 3

const tree2 = createTree([1, 2])
console.log(diameterOfBinaryTree(tree2)) // 1

const tree3 = createTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2])
console.log(diameterOfBinaryTree(tree3)) // 8

export { }
