export const testFindMaxAverage = () => {
  console.log("find max avg");

  const nums1 = [1, 12, -5, -6, 50, 3],
    k1 = 4;

  const nums2 = [5],
    k2 = 1;

  const nums3 = [-1],
    k3 = 1;

  function findMaxAverage(nums: number[], k: number): number {
    let max: null | number = null;
    let startIndex = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]; // 1, 13
      if (i >= k) {
        // false, false
        sum -= nums[startIndex];
        startIndex++;
      }

      if (i + 1 >= k) {
        if (max === null) {
          max = sum;
        } else if (sum > max) {
          max = sum; //
        }
      }
    }

    return max! / k;
  }

  console.log(findMaxAverage(nums1, k1));
};
