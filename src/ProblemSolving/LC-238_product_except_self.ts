export const testProduct = () => {
  console.log("test product");

  const nums = [1, 2, 3, 4];
  const nums2 = [-1, 1, 0, -3, 3];

  function productExceptSelf(nums: number[]): number[] {
    const forwardArr = [];
    const backwardArr = [];
    const output: number[] = [];

    forwardArr[0] = 1;
    backwardArr[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
      forwardArr[i] = forwardArr[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
      backwardArr[i] = backwardArr[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
      output[i] = forwardArr[i] * backwardArr[i];
    }

    return output;
  }

  console.log(productExceptSelf(nums));
};
