export const testSameTree = () => {
  console.log("test same tree");

  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  const root1a: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  };
  const root1b: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  };

  const root2a: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  };

  const root2b: TreeNode = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  };

  const root3a: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 1, left: null, right: null },
  };

  const root3b: TreeNode = {
    val: 1,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null },
  };

  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
      return true;
    }

    if (p === null || q === null) {
      return false;
    }

    if (p.val === q.val) {
      const left = isSameTree(p.left, q.left);
      const right = isSameTree(p.right, q.right);

      return left && right;
    }

    return false;
  }

  console.log(isSameTree(root3a, root3b));
};
