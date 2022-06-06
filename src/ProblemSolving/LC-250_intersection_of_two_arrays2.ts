export const testIntersection_two = () => {
  console.log("test intersection");

  const nums1A = [1, 2, 2, 1],
    nums1B = [2, 2]; // [2,2]
  const nums2A = [4, 9, 5],
    nums2B = [9, 4, 9, 8, 4]; //[4,9]

  function intersect(nums1: number[], nums2: number[]): number[] {
    let largerArray, smallerArray;
    const largeArrayMap: { [key: string]: number } = {};
    //const smallArrayMap: { [key: string]: number } = {};
    const result = [];

    if (nums1.length >= nums2.length) {
      largerArray = nums1;
      smallerArray = nums2;
    } else {
      largerArray = nums2;
      smallerArray = nums1;
    }

    for (let i = 0; i < largerArray.length; i++) {
      if (largerArray[i] in largeArrayMap) {
        largeArrayMap[largerArray[i]]++;
      } else {
        largeArrayMap[largerArray[i]] = 1;
      }
    }

    for (let i = 0; i < smallerArray.length; i++) {
      if (
        smallerArray[i] in largeArrayMap &&
        largeArrayMap[smallerArray[i]] > 0
      ) {
        result.push(smallerArray[i]);
        largeArrayMap[smallerArray[i]]--;
      }
    }

    return result;
  }

  console.time("test");
  console.log(intersect(nums2A, nums2B));
  console.timeEnd("test");
};
