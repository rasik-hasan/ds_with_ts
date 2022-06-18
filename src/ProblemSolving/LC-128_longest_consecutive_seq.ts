export const longestConsequtiveSeq = () => {
  console.log("test longest");

  const input1 = [9, 1, 11, 7, 200, 0, 10, 5, 100, 8];
  const input2 = [100, 4, 200, 1, 3, 2];
  const input3 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
  const input4 = [-3, -4, -5];
  const input5: any[] = [];
  const input6 = [0];
  const input7 = [0, 0];
  const input8 = [1, 2, 0, 0];
  const input9 = [1, 2, 0, 1];

  function longestConsecutive(nums: number[]): number {
    if (nums.length === 1) {
      return 1;
    }

    if (nums.length === 0) {
      return 0;
    }

    let max = 0;
    let localMax = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        continue;
      }
      if (nums[i] - 1 === nums[i - 1]) {
        localMax += 1;
      } else {
        localMax = 1;
      }

      if (localMax > max) {
        max = localMax;
      }
    }

    return max;
  }

  console.log(longestConsecutive(input9));
};
