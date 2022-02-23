export const testDecimalToBinary = () => {
  console.log("test Decimal to Binary");

  const testNumber = 233;

  const testDecimalToBinary = (
    inputNumber: number,
    result: string = ""
  ): string => {
    //base case
    console.log(inputNumber, result);
    if (inputNumber === 0) {
      return result;
    }

    result = (inputNumber % 2) + result;
    return testDecimalToBinary(Math.floor(inputNumber / 2), result);
  };

  console.log(testDecimalToBinary(testNumber));
};
