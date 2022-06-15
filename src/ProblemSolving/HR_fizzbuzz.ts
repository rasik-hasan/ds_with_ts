export const testFizzbuzz = () => {
  //console.log("fizz buzz");

  function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
      const divideby3 = i % 3;
      const divideby5 = i % 5;

      if (divideby3 === 0 && divideby5 === 0) {
        console.log("FizzBuzz");
      } else if (divideby3 === 0 && divideby5 !== 0) {
        console.log("Fizz");
      } else if (divideby5 === 0 && divideby3 !== 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }

  fizzBuzz(15);
};
