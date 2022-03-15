export const testSolution = () => {
  //console.log("test solution");
  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  const root: TreeNode = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  };

  const root2: TreeNode = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  };

  function maxDepth(root: TreeNode | null): number {
    const allDepths: number[] = [];

    const findDepth = (root: TreeNode | null, counter: number): number => {
      if (!root) {
        allDepths.push(counter);
        return counter;
      }
      counter++;
      const counterleft = findDepth(root.left, counter);
      const counterRight = findDepth(root.right, counterleft);
      return counterRight - 1;
    };

    findDepth(root, 0);

    return allDepths.sort((a, b) => a - b)[allDepths.length - 1];
  }

  console.log(maxDepth(root2));
};
