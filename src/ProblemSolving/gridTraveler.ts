export const testGridTraveler = () => {
  const m1 = 1,
    n1 = 1; //1
  const m2 = 2,
    n2 = 3; //3
  const m3 = 3,
    n3 = 2; //3
  const m4 = 3,
    n4 = 3; //6
  const m5 = 18,
    n5 = 18; // 2333606220

  const gridTraveler = (
    m: number,
    n: number,
    memo: { [key: string]: number } = {}
  ): number => {
    if (m === 0 || n === 0) {
      return 0;
    }
    if (m === 1 || n === 1) {
      return 1;
    }

    if (memo[`${m},${n}`] !== undefined) {
      return memo[`${m},${n}`];
    } else {
      const down = gridTraveler(m - 1, n, memo);
      const right = gridTraveler(m, n - 1, memo);
      const result = down + right;
      memo[`${m},${n}`] = result;

      return result;
    }
  };

  console.log(gridTraveler(m5, n5));
};
