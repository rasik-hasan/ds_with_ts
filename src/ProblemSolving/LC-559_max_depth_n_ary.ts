export const testMaxDepth = () => {
  class Node {
    val: number;
    children: Node[];
    constructor(val?: number, children?: Node[]) {
      this.val = val === undefined ? 0 : val;
      this.children = children === undefined ? [] : children;
    }
  }

  const input1: Node = {
    val: 1,
    children: [
      {
        val: 3,
        children: [
          { val: 5, children: [] },
          { val: 6, children: [] },
        ],
      },
      {
        val: 2,
        children: [],
      },
      { val: 4, children: [] },
    ],
  };

  const input2: Node = {
    val: 1,
    children: [
      {
        val: 2,
        children: [],
      },
      {
        val: 3,
        children: [
          {
            val: 6,
            children: [],
          },
          {
            val: 7,
            children: [{ val: 11, children: [{ val: 14, children: [] }] }],
          },
        ],
      },
      {
        val: 4,
        children: [{ val: 8, children: [{ val: 12, children: [] }] }],
      },
      {
        val: 5,
        children: [
          { val: 9, children: [{ val: 13, children: [] }] },
          { val: 10, children: [] },
        ],
      },
    ],
  };

  const input3: Node = {
    val: 1,
    children: [],
  };

  function maxDepth(root: Node | null): number {
    if (root === null) {
      return 0;
    }
    let max = 0;
    for (let i = 0; i < root.children.length; i++) {
      max = Math.max(maxDepth(root.children[i]), max);
    }

    return max + 1;
  }

  console.log(maxDepth(input3));
};
