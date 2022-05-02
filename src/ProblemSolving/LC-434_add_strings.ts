export const testAddStrings = () => {
  console.log("test add strings");

  const num1A = "11",
    num1B = "123";
  const num2A = "456",
    num2B = "77";

  const num3A = "0",
    num3B = "0";

  const num4A = "1",
    num4B = "9";

  function addStrings(num1: string, num2: string): string {
    const longer = num1.length > num2.length ? num1 : num2;
    const shorter = num1.length <= num2.length ? num1 : num2;

    // console.log(longer, shorter);

    const numString: number[] = [];

    let carry = 0;
    for (let i = longer.length - 1, j = shorter.length - 1; i >= 0; i--, j--) {
      //   console.log(longer[i], shorter[j]);
      let sum =
        parseInt(longer[i] ?? "0") + parseInt(shorter[j] ?? "0") + carry;

      carry = 0;

      if (sum > 9) {
        carry = 1;
        sum -= 10;
      }

      numString.push(sum);
    }

    if (carry !== 0) {
      numString.push(carry);
      carry = 0;
    }

    return numString.reverse().join("");
  }

  console.log(addStrings(num4A, num4B));
};
