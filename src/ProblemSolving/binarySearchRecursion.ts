export const testBinarySearchRecur = () => {
  console.log("bina");

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const searchNumber = 11;

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
      return binarySearchRecur(input, searchNumber, left, mid);
    }
  };

  console.log(
    binarySearchRecur(inputArray, searchNumber, 0, inputArray.length - 1)
  );
};
