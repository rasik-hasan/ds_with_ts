export const testFibonacci = () => {
  const input = 4;

  const fib = (n: number): number => {
    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }

    return fib(n - 2) + fib(n - 1);
  };

  console.log(fib(input));
};
