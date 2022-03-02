export const testFibonacci = () => {
  const input = 100;

  const fib = (n: number): number => {
    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }

    return fib(n - 2) + fib(n - 1);
  };

  const memoizeMap = new Map<number, number>();

  const fibMemoize = (n: number): number => {
    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }

    if (memoizeMap.has(n)) {
      return memoizeMap.get(n)!;
    } else {
      let value = fibMemoize(n - 2) + fibMemoize(n - 1);
      memoizeMap.set(n, value);
      return value;
    }
  };

  console.log(fibMemoize(input));
};
