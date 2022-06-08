export const test_remove_palin = () => {
  console.log("test remove palin");

  function removePalindromeSub(s: string): number {
    const reversedString = s.split("").reverse().join("");

    if (s === reversedString) {
      return 1;
    } else {
      return 2;
    }
  }

  console.log(removePalindromeSub("abab"));
};
