export const testIntersectionOfArray = () => {
  const nums1_a = [1, 2, 2, 1],
    nums1_b = [2, 2];

  const nums2_a = [4, 9, 5],
    nums2_b = [9, 4, 9, 8, 4];

  function intersection(nums1: number[], nums2: number[]): number[] {
    const nums1Map = new Map();
    const resultArray = new Map();

    for (let i = 0; i < nums1.length; i++) {
      nums1Map.set(nums1[i], 1);
    }

    for (let i = 0; i < nums2.length; i++) {
      if (nums1Map.has(nums2[i])) {
        resultArray.set(nums2[i], 1);
      }
    }

    let keys = Array.from(resultArray.keys());

    return keys;
  }

  console.log(intersection(nums2_a, nums2_b));
};
