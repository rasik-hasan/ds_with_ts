export const tech_magic_test_test = () => {
  console.log("readsy");

  const solution = (arr1: number[], arr2: number[]): number[] => {
    // TODO: Implement me!

    let pointer1 = 0;

    let pointer2 = 0;

    const resultArray: number[] = [];

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] === arr2[pointer2]) {
        resultArray.push(arr1[pointer1]);
        pointer1++;
        pointer2++;
      } else if (arr1[pointer1] < arr2[pointer2]) {
        pointer1++;
      } else {
        pointer2++;
      }
    }

    return resultArray;
  };

  const test1 = [1, 2, 3];
  const test2 = [1, 3, 5];

  const test3 = [4, 5, 6];

  console.log("Solution: ", solution(test1, test3));
};
