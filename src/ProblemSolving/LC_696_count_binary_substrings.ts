export const testCountBinarySubstrings = () => {
  function countBinarySubstrings(s: string): number {
    let count = 1;
    const countArr = [];
    let result = 0;

    for (let i = 1; i < s.length; i++) {
      console.log(s[i]);
      if (s[i] === s[i - 1]) {
        count++;
      } else {
        countArr.push(count);
        count = 1;
      }
    }

    countArr.push(count);

    for (let i = 1; i < countArr.length; i++) {
      result += Math.min(countArr[i], countArr[i - 1]);
    }

    console.log(countArr);

    return result;
  }

  const test1 = "00110011";
  const test2 = "10101";

  console.log(countBinarySubstrings(test2));
};
