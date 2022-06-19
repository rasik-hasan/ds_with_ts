export const testValidPalindrome = () => {
  console.log("test valid palindrome");

  const s = "A man, a plan, a canal: Panama";
  const s2 = "race a car";
  const s3 = " ";
  const s4 = "abcba";
  const s5 = "0P";

  function isPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-zA-Z0-9]/gm, "").toLowerCase();
    if (cleaned.length === 1) {
      return true;
    }
    let start = 0;
    let end = cleaned.length - 1;
    let isPalindrome = true;

    while (start <= end) {
      // console.log(cleaned[start], cleaned[end]);
      if (cleaned[start] === cleaned[end]) {
        start++;
        end--;
      } else {
        isPalindrome = false;
        break;
      }
    }

    return isPalindrome;
  }

  console.log(isPalindrome(s));
};
