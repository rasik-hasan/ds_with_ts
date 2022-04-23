export const removeDuplicates = () => {
  console.log("test duplicates");

  const input1 = [1, 1, 2];
  const input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const input3 = [3, 3, 5, 5, 5, 6, 7, 10];
  const input4 = [0, 0];
  const input5: any = [];

  function removeDuplicates(nums: number[]): number {
    let k = 1;
    let slowPointer = 0;
    let fastPointer = 1;

    while (fastPointer < nums.length) {
      if (nums[slowPointer] !== nums[fastPointer]) {
        nums[slowPointer + 1] = nums[fastPointer];
        slowPointer++;
        k++;
      }
      fastPointer++;
    }

    console.log(nums);

    return k;
  }

  console.log(removeDuplicates(input5));
};
