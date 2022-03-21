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
    console.log(nums, mid);

    if (mid === 0) {
      if (nums[mid] !== undefined) {
        console.log(nums[mid]);
        return new TreeNode(nums[mid], null, null);
      } else {
        return null;
      }
    }

    const newNode = new TreeNode(nums[mid], null, null);

    newNode.left = sortedArrayToBST(nums.slice(0, mid));
    newNode.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

    return newNode;
  }

  const testArr1 = [1, 2, 3];
  const testArr2 = [1, 2, 3, 4, 5];
  const testArr3 = [-10, -3, 0, 5, 9];
  const testArr4 = [1, 3];
  const testArr5 = [0];

  const rootNode = sortedArrayToBST(testArr5);
  console.log(rootNode);
};
