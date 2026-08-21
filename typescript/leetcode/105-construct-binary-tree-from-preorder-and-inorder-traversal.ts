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

  const root = new TreeNode(preorder[0])
  const rootIdx = inorder.findIndex(n => n === preorder[0])

  root.left = buildTree(preorder.slice(1, rootIdx + 1), inorder.slice(0, rootIdx))
  root.right = buildTree(preorder.slice(rootIdx + 1), inorder.slice(rootIdx + 1))

  return root
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])) // [3,9,20,null,null,15,7]
console.log(buildTree([-1], [-1])) // [-1]


export { }
