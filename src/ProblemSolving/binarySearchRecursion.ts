export const testBinarySearchRecur = () => {
  console.log("bina");

  const inputArray = [-1, 0, 3, 5, 9, 12];
  const searchNumber = 2;

  const binarySearchRecur = (
    input: number[],
    searchNumber: number,
    left: number,
    right: number
  ): number => {
    //base case
    if (left > right) {
      return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (input[mid] === searchNumber) {
      return mid;
    } else if (searchNumber > input[mid]) {
      return binarySearchRecur(input, searchNumber, mid + 1, right);
    } else {
      return binarySearchRecur(input, searchNumber, left, mid - 1);
    }
  };

  console.log(
    binarySearchRecur(inputArray, searchNumber, 0, inputArray.length - 1)
  );
};
