export const testDeleteAndEarn = () => {
  console.log("test delete and earn");

  const input1 = [3, 4, 2]; //6
  const input2 = [2, 2, 3, 3, 3, 4]; //9
  const input3 = [3, 5, 7]; // 15

  function deleteAndEarn_v1(nums: number[]): number {
    //O(2^n)
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

  //console.log(deleteAndEarn_v1(input2));

  function deleteAndEarn_v2(nums: number[]): number {
    const tally: { [key: string]: number } = {};

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in tally) {
        tally[nums[i]]++;
      } else {
        tally[nums[i]] = 1;
      }
    }

    //console.log(tally);

    const uniqueNums = Object.keys(tally).map((key) => parseInt(key));
    //console.log(uniqueNums);

    const results = [];
    results[0] = tally[uniqueNums[0]] * uniqueNums[0];

    //console.log(results[0]);

    for (let i = 1; i < uniqueNums.length; i++) {
      //console.log("uniqueNUms:", uniqueNums[i], uniqueNums[i - 1]);
      let temp;

      if (uniqueNums[i - 1] === uniqueNums[i] - 1) {
        temp = uniqueNums[i] * tally[uniqueNums[i]] + (results[i - 2] ?? 0);
      } else {
        temp = uniqueNums[i] * tally[uniqueNums[i]] + results[i - 1];
      }

      results[i] = Math.max(results[i - 1], temp);
    }

    return results[results.length - 1];
  }

  console.log(deleteAndEarn_v2(input3));
};
