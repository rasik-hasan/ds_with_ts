function hourglassSum(arr: number[][]): number {
  // Write your code here
  let highestSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr[0].length - 3; j++) {
      const hgArray = [
        arr[i][j],
        arr[i][j + 1],
        arr[i][j + 2],
        arr[i + 1][j + 1],
        arr[i + 2][j],
        arr[i + 2][j + 1],
        arr[i + 2][j + 2],
      ];

      //   console.log("HgArray: ", hgArray);

      const localSum = hgArray.reduce((sum, num) => sum + num, 0);
      //   console.log("localSum: ", localSum);

      if (localSum > highestSum) {
        highestSum = localSum;
      }
    }
  }

  return highestSum;
}

const grid: number[][] = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const grid2: number[][] = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

console.log(hourglassSum(grid2));
