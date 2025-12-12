// 108. Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

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


function sortedArrayToBST(nums: number[]): TreeNode | null {
  const buildTree = (left: number, right: number): TreeNode | null => {
    if (left > right) return null

    const mid = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[mid])

    root.left = buildTree(left, mid - 1)
    root.right = buildTree(mid + 1, right)

    return root
  }

  return buildTree(0, nums.length - 1)


  // ------------------------------
  // if (!nums.length) {
  //   return null
  // }

  // const mid = Math.floor(nums.length / 2)
  // const tree = new TreeNode(nums[mid])

  // tree.left = sortedArrayToBST(nums.slice(0, mid))
  // tree.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))

  // return tree
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])) // [0, -3, 9, -10, null, 5]
console.log(sortedArrayToBST([1, 3])) // [3, 1]

export { }
