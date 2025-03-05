export const testHR_maxArray_sum = () => {
  function maxSubsetSum(arr: number[]): number {
    const maxArray = [];

    maxArray[0] = Math.max(arr[0], 0);

    for (let i = 1; i < arr.length; i++) {
      maxArray[i] = Math.max(
        maxArray[i - 1],
        arr[i] + Math.max(0, maxArray[i - 2] ?? 0)
      );
    }

    console.log("maxArray: ", maxArray);

    return maxArray[maxArray.length - 1];
  }

  const arr1 = [-2, 1, 3, -4, 5];
  const arr2 = [-2, -3, -1];
  const arr3 = [3, 5, -7, 8, 10];
  // console.log(arr1.slice(2));

  console.log(maxSubsetSum(arr3));
};
