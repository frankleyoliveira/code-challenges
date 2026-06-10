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
  if (!root) return []
  if (!root.left && !root.right) return [root.val]

  const getKeys = (root: TreeNode | null): number[] => {
    if (!root) return []

    const left = getKeys(root.left)
    const right = getKeys(root.right)

    return [...left, root.val, ...right]
  }

  const allKeys = getKeys(root).sort((a, b) => a - b)

  let modes: number[] = []
  let current = [-1, 0] // key, count
  let max = 1

  for (let i = 0; i < allKeys.length; i++) {
    if (current[0] === allKeys[i]) {
      current[1] = current[1] + 1
    } else {
      if (current[1] === max) {
        modes.push(current[0])
      } else if (current[1] > max) {
        modes = [current[0]]
        max = current[1]
      }
      current = [allKeys[i], 1]
    }
  }
  if (current[1] === max) {
    modes.push(current[0])
  } else if (current[1] > max) {
    modes = [current[0]]
  }

  return modes
}

const tree1 = createTree([1, null, 2, 2])
console.log(findMode(tree1)) // [2]

const tree2 = createTree([0])
console.log(findMode(tree2)) // [0]

export { }
