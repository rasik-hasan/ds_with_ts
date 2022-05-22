export const testSymmetricTree = () => {
  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  const input1: TreeNode = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  };

  const input2: TreeNode = {
    val: 1,
    left: { val: 2, left: null, right: { val: 3, left: null, right: null } },
    right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  };

  function isSymmetric(root: TreeNode | null): boolean {
    if (root?.left === null && root.right === null) {
      return true;
    }

    if (root?.left === null || root?.right === null) {
      return false;
    }

    if (root?.left?.val !== root?.right?.val) {
      return false;
    }

    const leftQ: any[] = [];
    const rightQ: any[] = [];
    let value = true;
    leftQ.push(root?.left);
    rightQ.push(root?.right);

    while (leftQ.length !== 0 && rightQ.length !== 0) {
      const left = leftQ.shift();
      const right = rightQ.shift();

      if (left === null && right === null) {
        //do nothing
      } else if (left === null || right === null) {
        value = false;
      } else if (left?.val === right?.val) {
        leftQ.push(left.left);
        leftQ.push(left.right);
        rightQ.push(right.right);
        rightQ.push(right.left);
      } else {
        value = false;
      }
    }

    return value;
  }

  console.log(isSymmetric(input2));
};
