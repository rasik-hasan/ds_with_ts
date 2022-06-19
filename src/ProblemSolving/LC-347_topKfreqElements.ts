export const testTopKFreq = () => {
  console.log("top j");

  const nums = [1, 1, 1, 2, 2, 3],
    k = 2;

  const nums1 = [1],
    k1 = 1;

  function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length === 1) {
      return nums;
    }
    const kMap: { [key: string]: { elem: number; count: number } } = {};

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in kMap) {
        kMap[nums[i]] = { ...kMap[nums[i]], count: kMap[nums[i]].count + 1 };
      } else {
        kMap[nums[i]] = { elem: nums[i], count: 1 };
      }
    }

    const sortedValues = Object.values(kMap).sort((a, b) => b.count - a.count);

    //console.log(sortedValues);

    const result = [];

    for (let i = 0; i < k; i++) {
      result.push(sortedValues[i].elem);
    }

    return result;
  }

  console.log(topKFrequent(nums1, k1));
};
