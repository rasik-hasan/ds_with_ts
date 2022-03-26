export const testDOBT = () => {
  console.log("testing dobt");

  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  const root1: TreeNode = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: {
          val: 8,
          left: {
            val: 10,
            left: { val: 11, left: null, right: null },
            right: null,
          },
          right: null,
        },
        right: { val: 9, left: null, right: null },
      },
      right: {
        val: 5,
        left: null,
        right: {
          val: 6,
          left: null,
          right: { val: 7, left: null, right: null },
        },
      },
    },
    right: { val: 3, left: null, right: null },
  };

  const root2: TreeNode = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  };

  const root3: TreeNode = {
    val: 0,
    left: null,
    right: null,
  };

  const root4: TreeNode = {
    val: 1,
    left: { val: 3, left: null, right: null },
    right: null,
  };

  function diameterOfBinaryTree(root: TreeNode | null): number {
    const valueArr: number[] = [];

    const dobt = (root: TreeNode | null): number => {
      //console.log(root);
      if (root === null) {
        return 0.5;
      }
      const leftHeight = dobt(root.left);
      const rightHeight = dobt(root.right);
      const sum = Math.floor(leftHeight + rightHeight);
      valueArr.push(sum);

      return Math.floor(1 + Math.max(leftHeight, rightHeight));
    };

    dobt(root);
    return Math.max(...valueArr);
  }

  console.log(diameterOfBinaryTree(root3));
};
