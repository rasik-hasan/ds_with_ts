export const test_substring_count = () => {
  console.log("ready");

  function getSubstringCount(s: string): number {
    let substringCount = 1;
    let substrintCountPrevious = 0;
    let finalCount = 0;

    for (let i = 1; i < s.length; i++) {
      console.log("s[i]: ", s[i], "s[i-1]: ", s[i - 1]);
      if (s[i] === s[i - 1]) {
        substringCount++;
        console.log("substringCount: ", substringCount);
      } else {
        console.log(
          "FinalCount: ",
          finalCount,
          "substringCount: ",
          substringCount,
          "substringCountPrevious: ",
          substrintCountPrevious
        );
        finalCount +=
          substringCount < substrintCountPrevious
            ? substringCount
            : substrintCountPrevious;
        substrintCountPrevious = substringCount;
        substringCount = 1;

        console.log(
          "FinalCount: ",
          finalCount,
          "substringCount: ",
          substringCount,
          "substringCountPrevious: ",
          substrintCountPrevious
        );
      }
    }

    console.log(
      "Outside loop FinalCount: ",
      finalCount,
      "substringCount: ",
      substringCount,
      "substringCountPrevious: ",
      substrintCountPrevious
    );
    return (finalCount +=
      substringCount < substrintCountPrevious
        ? substringCount
        : substrintCountPrevious);
  }

  const test1 = "00110011"; //4 "0011", "01", "1100", "10", "0011", and "01"

  console.log(getSubstringCount(test1));
};

export const test_test_2 = () => {
  console.log("ready");

  function getString(input_str: string): string {
    // Write your code here
    const resultString: string[] = [];

    const charMap: { [key: string]: number } = {};

    // console.log(charMap);

    for (let i = 0; i < input_str.length; i++) {
      console.log(charMap.hasOwnProperty(input_str[i]));
      if (!charMap.hasOwnProperty(input_str[i])) {
        // console.log(input_str[i]);

        charMap[input_str[i]] = 1;
        resultString.push(input_str[i]);
      }
    }

    return resultString.join("");
  }

  const test1 = "abacaba";

  console.log(getString(test1));
};
