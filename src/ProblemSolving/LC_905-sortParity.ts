export const testSortParity = () => {
  console.log("test sort parity");

  const nums1 = [3, 1, 2, 4],
    nums2 = [0],
    nums3 = [1, 2, 3, 4, 5],
    nums4 = [1, 2];

  function sortArrayByParity(nums: number[]): number[] {
    let sp = 0;
    let fp = nums.length - 1;

    const isOdd = (value: number): boolean => {
      return value % 2 !== 0;
    };

    const swap = (sp: number, fp: number) => {
      const temp = nums[sp];
      nums[sp] = nums[fp];
      nums[fp] = temp;
    };

    while (sp < fp) {
      if (isOdd(nums[sp])) {
        if (isOdd(nums[fp])) {
          fp--;
        } else {
          swap(sp, fp);
          sp++;
          fp--;
        }
      } else {
        sp++;
      }
    }

    return nums;
  }

  console.log(sortArrayByParity(nums4));
};
