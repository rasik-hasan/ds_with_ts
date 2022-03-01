export const testBinarySearchLoop = () => {
  const inputArray = [-1, 0, 3, 5, 9, 12];

  const searchNumber = 100;

  const binarySearchLoop = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    //console.log(left, right);

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      //   console.log(
      //     "left: ",
      //     left,
      //     " mid: ",
      //     mid,
      //     " right: ",
      //     right,
      //     "value: ",
      //     nums[mid]
      //   );
      if (target === nums[mid]) {
        result = mid;
        left = right + 1;
      } else if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  console.log(binarySearchLoop(inputArray, searchNumber));
};
