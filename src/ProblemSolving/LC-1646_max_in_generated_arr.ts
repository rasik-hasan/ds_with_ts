export const testMax = () => {
  console.log("test max");

  function getMaximumGenerated(n: number): number {
    const nums: number[] = [];
    let counter = 0;

    while (counter < n + 1) {
      const doubleCounter = 2 * counter;

      const doubleCounterPlus1 = 2 * counter + 1;
      if (counter === 0) {
        nums[counter] = 0;
      } else if (counter === 1) {
        nums[counter] = 1;
      }
      if (2 <= doubleCounter && doubleCounter <= n) {
        nums[doubleCounter] = nums[counter];
      }
      if (2 <= doubleCounterPlus1 && doubleCounterPlus1 <= n) {
        nums[doubleCounterPlus1] = nums[counter] + nums[counter + 1];
      }

      counter++;
    }
    // console.log(nums);

    return Math.max(...nums);
  }

  const test1 = 7;
  const test2 = 2;
  const test3 = 3;

  console.log(getMaximumGenerated(7));
};
