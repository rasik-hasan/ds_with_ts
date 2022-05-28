export const testMissingNumber = () => {
  console.log("test missing");

  function missingNumber(nums: number[]): number {
    const hashh: { [key: number]: boolean } = {};
    let missing = -1;

    //assign false to all
    for (let i = 0; i <= nums.length; i++) {
      hashh[i] = false;
    }
    //console.log(hashh);

    //assign keys in nums to true
    for (let i = 0; i < nums.length; i++) {
      hashh[nums[i]] = true;
    }

    //check which is false
    for (let i = 0; i <= nums.length; i++) {
      if (hashh[i] === false) {
        missing = i;
      }
    }

    //console.log(hashh);

    return missing;
  }

  const input1 = [3, 0, 1];
  const input2 = [0, 1];
  const input3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

  console.log(missingNumber(input1));
  console.log(missingNumber(input2));
  console.log(missingNumber(input3));
};
