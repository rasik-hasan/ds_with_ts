export const testInvBinTree = () => {
  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  const root: TreeNode = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null },
    },
  };

  function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
      return root;
    }
    invertTree(root.left);
    invertTree(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
  }

  console.log(invertTree(root));
};
