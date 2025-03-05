export const test_test = () => {
  console.log("ready");

  function longest_common_prefix(words: string[]): string {
    if (words.length === 0) {
      return "";
    }

    if (words.length === 1) {
      return words[0];
    }

    let firstString = words[0];

    for (let i = 0; i < firstString.length; i++) {
      for (let j = 1; j < words.length; j++) {
        if (firstString[i] !== words[j][i]) {
          return firstString.slice(0, i);
        }
      }
    }

    return firstString;
  }

  console.log(longest_common_prefix(["cat", "catalog", "catch"])); // "cat"
  console.log(longest_common_prefix(["catalog", "catch", "category", "cat"])); // "cat"
  console.log(
    longest_common_prefix(["plain", "plan", "plant", "plastic", "planet"])
  ); // "pla"
  console.log(longest_common_prefix(["blue", "green", "yellow", "red"])); // ""
  console.log(longest_common_prefix(["the first", "the second", "the third"])); // "the "
  console.log(longest_common_prefix(["one word"])); // "one word"
  console.log(longest_common_prefix([""])); // return ""
  console.log(longest_common_prefix([])); // return ""
};
