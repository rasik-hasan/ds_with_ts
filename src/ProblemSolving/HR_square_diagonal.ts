export const testSquareDiagonal = () => {
  console.log("test square");

  const input1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  function diagonalDifference(arr: number[][]): number {
    // Write your code here

    const length = arr[0].length;

    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < length; i++) {
      leftToRight += arr[i][i];
    }

    for (let i = 0, j = length - 1; j >= 0; j--, i++) {
      rightToLeft += arr[i][j];
    }

    const diff = Math.abs(rightToLeft - leftToRight);

    console.log(leftToRight, rightToLeft, length, diff);

    return diff;
  }

  console.log(diagonalDifference(input1));
};
