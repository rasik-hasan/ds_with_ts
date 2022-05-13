export const calculate_ratios = () => {
  console.log("test calcu");

  const arr1 = [1, 1, 0, -1, -1];

  function plusMinus(arr: number[]): void {
    // Write your code here

    const arrLength = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arrLength; i++) {
      if (arr[i] < 0) {
        negative++;
      } else if (arr[i] === 0) {
        zero++;
      } else {
        positive++;
      }
    }

    let positiveRatio = (positive / arrLength).toFixed(6);
    let negativeRatio = (negative / arrLength).toFixed(6);
    let zeroRatio = (zero / arrLength).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
  }

  plusMinus(arr1);
};
