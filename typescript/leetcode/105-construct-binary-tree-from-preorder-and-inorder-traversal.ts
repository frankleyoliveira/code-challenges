// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null

  const root = preorder[0]
  const rootIdxInorder = inorder.findIndex(n => n === root)
  let leftInorder: number[] = []
  let rightInorder: number[] = []
  let leftPreorder: number[] = []
  let rightPreorder: number[] = []

  if (rootIdxInorder > 0) {
    leftInorder = inorder.slice(0, rootIdxInorder)
    leftPreorder = preorder.slice(1, leftInorder.length + 1)
  }

  if (rootIdxInorder < inorder.length - 1) {
    rightInorder = inorder.slice(rootIdxInorder + 1)
    rightPreorder = preorder.slice(leftInorder.length + 1)
  }

  return new TreeNode(root, buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder))
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])) // [3,9,20,null,null,15,7]
console.log(buildTree([-1], [-1])) // [-1]


export { }
