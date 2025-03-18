export const testIndexOfFirstOccurence = () => {
  console.log("ready");

  function strStr(haystack: string, needle: string): number {
    let firstOccurence = -1;

    const needleLength = needle.length;

    for (let i = 0; i < haystack.length; i++) {
      let count = 0;
      console.log("i:", i);

      for (let j = i; j <= haystack.length; j++) {
        console.log(haystack[j], needle[count]);
        if (haystack[j] === needle[count]) {
          count++;
        } else {
          console.log("break");
          break;
        }

        if (count === needleLength) {
          return i;
        }
      }
    }

    console.log("hello world");

    return firstOccurence;
  }

  const hayStack = "mississippi";
  const needle = "issip";

  console.log(strStr(hayStack, needle));
};
