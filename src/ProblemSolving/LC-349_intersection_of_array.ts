export const testIntersectionOfArray = () => {
  const nums1_a = [1, 2, 2, 1],
    nums1_b = [2, 2];

  const nums2_a = [4, 9, 5],
    nums2_b = [9, 4, 9, 8, 4];

  function intersection(nums1: number[], nums2: number[]): number[] {
    const result = [];
    const uniqNums1 = [...new Set(nums1)];

    for (let i = 0; i < uniqNums1.length; i++) {
      if (nums2.includes(uniqNums1[i])) {
        result.push(uniqNums1[i]);
      }
    }

    return result;
  }

  console.log(intersection(nums1_a, nums1_b));
};
