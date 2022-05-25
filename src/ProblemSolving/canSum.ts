export const testCanSum = () => {
  console.log("test can sum");

  const targetSum1 = 7,
    arr1 = [2, 3]; //true

  const targetSum2 = 7,
    arr2 = [5, 3, 4, 7]; //true

  const targetSum3 = 7,
    arr3 = [2, 4]; // false

  const targetSum4 = 8,
    arr4 = [2, 3, 5]; // true

  const targetSum5 = 300,
    arr5 = [7, 14]; // false

  const canSum = (targetSum: number, numbers: number[]): boolean => {
    if (targetSum === 0) {
      return true;
    }

    if (targetSum < 0) {
      return false;
    }

    const arrayLength = numbers.length;
    const results = [];

    for (let i = 0; i < arrayLength; i++) {
      results.push(canSum(targetSum - numbers[i], numbers));
    }

    if (results.indexOf(true) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  console.log(canSum(targetSum4, arr4));
};
