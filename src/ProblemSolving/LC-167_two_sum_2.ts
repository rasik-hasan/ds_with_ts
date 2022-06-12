export const testTwoSum_2 = () => {
  console.log("test two sum 2");
  const numbers1 = [2, 7, 11, 15],
    target1 = 9; // [1,2]

  const numbers2 = [2, 3, 4],
    target2 = 6; // [1,3]

  const numbers3 = [-1, 0],
    target3 = -1; // [1,2]

  const number4 = [-7, -6, 0, 11, 15, 17],
    target4 = 9;

  function twoSum(numbers: number[], target: number): number[] {
    let pointer1, pointer2;
    let firstIndex: number, secondIndex: number;

    const binarySearch = (
      search: number,
      start: number,
      end: number
    ): number => {
      //console.log(start, end);
      if (start > end) {
        return -1;
      }

      let mid = Math.floor((end - start) / 2) + start;

      if (search > numbers[mid]) {
        return binarySearch(search, mid + 1, end);
      } else if (search < numbers[mid]) {
        return binarySearch(search, start, mid - 1);
      } else {
        return mid;
      }
    };

    for (let i = 0; i < numbers.length; i++) {
      pointer1 = numbers[i];
      pointer2 = target - pointer1;

      secondIndex = binarySearch(pointer2, i + 1, numbers.length - 1);

      if (secondIndex !== -1) {
        firstIndex = i;
        i = numbers.length + 1;
      }
    }

    const resultArray: number[] = [firstIndex! + 1, secondIndex! + 1];
    return resultArray;
  }

  console.log(twoSum(number4, target4));
};
