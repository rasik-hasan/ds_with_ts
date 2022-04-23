export const testRemoveElements = () => {
  console.log("remove");

  const test1 = [3, 2, 2, 3],
    val1 = 3;
  const test2 = [0, 1, 2, 2, 3, 0, 4, 2],
    val2 = 2;

  const test3 = [0, 0],
    val3 = 0;
  const test4: any = [],
    val4 = 1;

  const test5 = [2],
    val5 = 3;

  function removeElement(nums: number[], val: number): number {
    let sp = 0;
    let fp = 0;

    const swap = (sp: number, fp: number) => {
      const temp = nums[sp];
      nums[sp] = nums[fp];
      nums[fp] = temp;
    };

    while (fp < nums.length) {
      if (nums[sp] === val) {
        if (nums[fp] !== val) {
          swap(sp, fp);
        } else {
          fp++;
        }
      } else {
        sp++;
        fp++;
      }
    }

    return sp;
  }

  console.log(removeElement(test5, val5));
};
