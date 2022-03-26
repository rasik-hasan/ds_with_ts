export const testPlusOne = () => {
  console.log("test plus one");

  function plusOne(digits: number[]): number[] {
    let index = digits.length - 1;

    while (index >= 0) {
      if (digits[index] === 9) {
        digits[index] = 0;
        index--;
        if (index === -1) {
          digits.unshift(1);
        }
      } else {
        digits[index] = digits[index] + 1;
        index = -1;
      }
    }

    return digits;
  }

  const test1 = [1, 2, 3];
  const test2 = [4, 3, 2, 1];
  const test3 = [9];
  const test4 = [9, 9];
  const test5 = [1, 9, 9];

  console.log(plusOne(test5));
};
