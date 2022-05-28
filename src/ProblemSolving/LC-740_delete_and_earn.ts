export const testDeleteAndEarn = () => {
  console.log("test delete and earn");

  const input1 = [3, 4, 2]; //6
  const input2 = [2, 2, 3, 3, 3, 4]; //9

  function deleteAndEarn_v1(nums: number[]): number {
    //O(n^3)
    if (nums.length === 0) {
      return 0;
    }

    const results: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i];
      const oneLess = curr - 1;
      const oneMore = curr + 1;
      const numsCopy = [...nums]; // O(n)

      const filtered = numsCopy.filter((num) => {
        return num !== oneLess && num !== oneMore;
      }); // O(n);

      const ind = filtered.indexOf(curr); //O(n)
      const point = filtered.splice(ind, 1)[0]; //O(n)
      const addedPoint = point + deleteAndEarn_v1(filtered);
      results.push(addedPoint);
    }

    return Math.max(...results);
  }

  console.log(deleteAndEarn_v1(input2));
};
