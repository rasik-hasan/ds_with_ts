export const testPalindromRecursion = () => {
  console.log("palindrome");

  const testWord = "racecar";

  const palindrome = (inputString: string): boolean => {
    console.log(inputString);
    if (inputString.length <= 1) {
      return true;
    }
    if (inputString.charAt(0) === inputString.charAt(inputString.length - 1)) {
      return palindrome(inputString.substring(1, inputString.length - 1));
    }
    return false;
  };

  console.log(palindrome(testWord));
};
