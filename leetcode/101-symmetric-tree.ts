// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/description/

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

function isSymmetric(root: TreeNode | null): boolean {
  const stackLeft = [root?.left]
  const stackRight = [root?.right]

  while (stackLeft.length && stackRight.length) {
    if (stackLeft[0] === null && stackRight[0] === null) {
      stackLeft.shift()
      stackRight.shift()

      continue
    }

    if (stackLeft[0]?.val !== stackRight[0]?.val) {
      return false
    }

    const ll = stackLeft[0]?.left || null
    const lr = stackLeft[0]?.right || null
    const rl = stackRight[0]?.left || null
    const rr = stackRight[0]?.right || null

    if (ll?.val !== rr?.val || lr?.val !== rl?.val) {
      return false
    }

    stackLeft.shift()
    stackRight.shift()

    stackLeft.unshift(ll)
    stackRight.unshift(rr)
    stackLeft.push(lr)
    stackRight.push(rl)
  }

  return true
}

const root1 = createTree([1, 2, 2, 3, 4, 4, 3])
console.log(isSymmetric(root1)) // true

const root2 = createTree([1, 2, 2, null, 3, null, 3])
console.log(isSymmetric(root2)) // false

const root3 = createTree([1, 0])
console.log(isSymmetric(root3)) // false

export { }
