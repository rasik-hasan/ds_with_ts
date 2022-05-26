export const testHowSum = () => {
  console.log("test how sum");

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

  const howSum = (
    targetSum: number,
    numbers: number[],
    memo: { [key: string]: number[] | null } = {}
  ): number[] | null => {
    if (targetSum in memo) {
      return memo[targetSum];
    }
    if (targetSum === 0) {
      return [];
    }
    if (targetSum < 0) {
      return null;
    }

    for (let i = 0; i < numbers.length; i++) {
      const result: number[] | null = howSum(
        targetSum - numbers[i],
        numbers,
        memo
      );
      memo[targetSum] = result;

      if (result !== null) {
        result.push(numbers[i]);

        return result;
      }
    }
    return null;
  };

  console.log(howSum(targetSum1, arr1));
  console.log(howSum(targetSum2, arr2));
  console.log(howSum(targetSum3, arr3));
  console.log(howSum(targetSum4, arr4));
  console.log(howSum(targetSum5, arr5));
};
