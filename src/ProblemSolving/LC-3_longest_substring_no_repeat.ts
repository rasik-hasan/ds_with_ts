export const testLongestSubstringNoRepeat = () => {
  console.log("test");

  const input1 = "abcabcbb";
  const input2 = "bbbbb";
  const input3 = "pwwkew";
  const input4 = "bbbabcd";

  function lengthOfLongestSubstring(s: string): number {
    let max = 0,
      localMax = 0,
      start = 0,
      end = 0;
    const wordMap: { [key: string]: number } = {};

    while (end < s.length) {
      if (s[end] in wordMap) {
        delete wordMap[s[start]];
        start++;
        localMax--;
      } else {
        wordMap[s[end]] = 1;
        localMax++;
        end++;
      }

      if (localMax > max) {
        max = localMax;
      }
    }

    return max;
  }

  console.log(lengthOfLongestSubstring(input4));
};
