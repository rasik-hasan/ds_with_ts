export const SA2BST = () => {
  console.log("saaaa");

  /**
   * Definition for a binary tree node.
   * class TreeNode {
   *     val: number
   *     left: TreeNode | null
   *     right: TreeNode | null
   *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.left = (left===undefined ? null : left)
   *         this.right = (right===undefined ? null : right)
   *     }
   * }
   */

  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function sortedArrayToBST(nums: number[]): TreeNode | null {
    const mid = Math.floor(nums.length / 2);
    let left = mid - 1;
    let root = new TreeNode(nums[mid], null, null);

    const addNodeLeft = (root: TreeNode, left: number) => {
      if (left < 0 || left === mid) {
        return;
      }
      const newNode = new TreeNode(nums[left], null, null);
      root.left = newNode;
      left--;
      addNodeLeft(root.left, left);
    };

    addNodeLeft(root, left);
    if (root.val !== nums[nums.length - 1]) {
      root.right = new TreeNode(nums[nums.length - 1], null, null);
      left = nums.length - 2;
      addNodeLeft(root.right, left);
    }

    return root;
  }

  const testArr1 = [1, 3];
  const testArr2 = [0, 1, 2, 3, 4, 5];

  const rootNode = sortedArrayToBST(testArr2);
  console.log(rootNode);
};
