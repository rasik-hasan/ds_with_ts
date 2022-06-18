export const testgroupAnagrams = () => {
  console.log("group anagrams");

  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const strs4 = ["eat", "tea", "tan", "ate", "nat", "bat"];

  const strs2 = [""];
  const strs3 = ["a"];

  function groupAnagrams(strs: string[]): string[][] {
    const anaGramMap: { [key: string]: string[] } = {};

    const sortAlphabets = function (text: string) {
      return text.split("").sort().join("");
    };

    const sortedStrs = strs.map((str) => {
      const sortedString = sortAlphabets(str);
      return sortedString;
    });

    for (let i = 0; i < strs.length; i++) {
      if (sortedStrs[i] in anaGramMap) {
        anaGramMap[sortedStrs[i]] = [...anaGramMap[sortedStrs[i]], strs[i]];
      } else {
        anaGramMap[sortedStrs[i]] = [strs[i]];
      }
    }

    //console.log(Object.values(anaGramMap));

    return Object.values(anaGramMap);
  }

  console.log(groupAnagrams(strs3));
};
