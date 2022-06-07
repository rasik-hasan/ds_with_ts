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

  const nums1_4 = [2, 0],
    m_4 = 1,
    nums2_4 = [1],
    n_4 = 1; //[1,2]

  // function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  //   let count1 = 0;
  //   let count2 = 0;
  //   let temp = m;

  //   while (count1 < temp && count2 < n) {
  //     if (nums1[count1] <= nums2[count2]) {
  //       count1++;
  //     } else {
  //       nums1.splice(count1, 0, nums2[count2]);
  //       count1++;
  //       temp++;
  //       count2++;
  //     }
  //   }

  //   if (count2 !== n) {
  //     //nums1 is complete
  //     const restOfNums2 = nums2.slice(count2);
  //     nums1.splice(temp, 0, ...restOfNums2);
  //   }

  //   nums1.splice(m + n, nums1.length - m + n);
  // }

  // function merge_lazy(nums1: number[], m: number, nums2: number[], n: number): void {
  //   let ptr1 = 0,
  //     ptr2 = 0,
  //     counter = 0;
  //   const nums3 = [];

  //   while (counter < m + n) {
  //     console.log(counter);
  //     if (ptr1 === m) {
  //       nums3[counter] = nums2[ptr2];
  //       ptr2++;
  //     } else if (ptr2 === n) {
  //       nums3[counter] = nums1[ptr1];
  //       ptr1++;
  //     } else if (nums1[ptr1] <= nums2[ptr2]) {
  //       nums3[counter] = nums1[ptr1];
  //       ptr1++;
  //     } else {
  //       nums3[counter] = nums2[ptr2];
  //       ptr2++;
  //     }

  //     counter++;
  //   }

  //   //console.log(nums3);

  //   nums3.forEach((value, index) => {
  //     nums1[index] = value;
  //   });
  // }

  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    //to do
  }

  merge(nums1_3, m_3, nums2_3, n_3);
  console.log(nums1_3);
};
