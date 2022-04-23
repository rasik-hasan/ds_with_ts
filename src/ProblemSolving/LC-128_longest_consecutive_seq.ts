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

  function longestConsecutive(nums: number[]): number {
    if (nums.length === 1) {
      return 1;
    }

    nums.sort((a, b) => a - b);
    console.log(nums);
    const diffs = [];

    for (let i = 0; i < nums.length - 1; i++) {
      const diff = nums[i + 1] - nums[i];

      if (diff === 1) {
        diffs.push(1);
      } else {
        diffs.push(0);
      }
    }

    console.log(diffs);

    const sums = [];

    let sum = 0;

    for (let i = 0; i <= diffs.length; i++) {
      if (diffs[i] === 1) {
        sum += 1;
      } else {
        if (sum >= 1) {
          sums.push(sum);
          sum = 0;
        }
      }
    }

    console.log(sums);

    const answer = Math.max(...sums) + 1;

    return answer > 0 ? answer : 0;
  }

  console.log(longestConsecutive(input6));
};
