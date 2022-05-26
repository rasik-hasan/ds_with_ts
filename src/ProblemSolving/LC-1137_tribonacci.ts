export const testTribonacciSeries = () => {
  console.log("test tribonacci");

  function tribonacci(n: number, memo: { [key: string]: number } = {}): number {
    if (n in memo) {
      return memo[n];
    }
    if (n === 0) {
      return 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }

    const result =
      tribonacci(n - 1, memo) +
      tribonacci(n - 2, memo) +
      tribonacci(n - 3, memo);
    memo[n] = result;
    return result;
  }

  console.log(tribonacci(0));
  console.log(tribonacci(1));
  console.log(tribonacci(2));
  console.log(tribonacci(3));
  console.log(tribonacci(4));
  console.log(tribonacci(25));
};
