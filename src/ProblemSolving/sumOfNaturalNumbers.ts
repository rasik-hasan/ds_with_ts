export const testSumOfNatural = () => {
  console.log("sum of natural number");

  const n = 10;

  const sumOfNatural = (inputNumber: number): number => {
    //base case
    if (inputNumber === 1) {
      return 1;
    }

    return sumOfNatural(inputNumber - 1) + inputNumber;
  };

  console.log(sumOfNatural(n));
};
