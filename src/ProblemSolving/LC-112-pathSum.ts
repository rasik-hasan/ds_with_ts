export const testPathSum = () => {
  console.log("test path sum");

  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  const testRoot1: TreeNode = {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: { val: 7, left: null, right: null },
        right: { val: 2, left: null, right: null },
      },
      right: null,
    },
    right: {
      val: 8,
      left: { val: 13, left: null, right: null },
      right: { val: 4, left: null, right: { val: 1, left: null, right: null } },
    },
  };

  const root1Target = 22;

  const testRoot2: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  };

  const root2Target = -1;

  const testRoot3: TreeNode = {
    val: 2,
    left: null,
    right: null,
  };

  const root3Target = 1;

  const testRoot4: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  };

  const root4Target = 1;

  const testRoot5 = null;
  const root5Target = 0;

  function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let isMatch: boolean = false;

    const check = (root: TreeNode | null, parentSum: number | null) => {
      if (root === null) {
        if (parentSum === targetSum) {
          return true;
        }
        return false;
      }

      if (parentSum === null) {
        parentSum = 0;
      }

      const addSum = parentSum + root.val;
      const leftCheck = check(root.left, addSum);
      const rightCheck = check(root.right, addSum);

      if (leftCheck && rightCheck) {
        isMatch = true;
      }

      return false;
    };

    check(root, null);

    return isMatch;
  }

  console.log(hasPathSum(testRoot5, root5Target));
};
