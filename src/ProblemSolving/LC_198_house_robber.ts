export const testHouseRobber = () => {
  console.log("testing house robber");
  const test1 = [2, 7, 9, 3, 1];
  const test2 = [1, 2, 3, 1];
  const test3 = [1, 2];
  const test4 = [
    114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223,
    58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187,
    69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
  ];
  //console.log(test1.slice(2, test1.length));

  function rob(nums: number[], memo = {}): number {
    console.log(nums);
    if (nums.length === 0) {
      return 0;
    }
    if (nums.length === 1) {
      return nums[0];
    }

    let max = 0;

    nums.forEach((value, index) => {
      const v = rob(nums.slice(index + 2, nums.length)) + value;
      if (v > max) {
        max = v;
      }
    });

    return max;
  }

  console.log(rob(test1));
};
