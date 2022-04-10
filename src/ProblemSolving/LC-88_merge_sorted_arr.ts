export const testMerge = () => {
  console.log("test merge");

  const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;

  const nums1_2 = [1],
    m_2 = 1,
    nums2_2: number[] = [],
    n_2 = 0;

  const nums1_3 = [0],
    m_3 = 0,
    nums2_3 = [1],
    n_3 = 1;

  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let count1 = 0;
    let count2 = 0;
    let temp = m;

    while (count1 < temp && count2 < n) {
      if (nums1[count1] <= nums2[count2]) {
        count1++;
      } else {
        nums1.splice(count1, 0, nums2[count2]);
        count1++;
        temp++;
        count2++;
      }
    }

    if (count2 !== n) {
      //nums1 is complete
      const restOfNums2 = nums2.slice(count2);
      nums1.splice(temp, 0, ...restOfNums2);
    }

    nums1.splice(m + n, nums1.length - m + n);
  }

  merge(nums1_3, m_3, nums2_3, n_3);
  console.log(nums1_3);
};
