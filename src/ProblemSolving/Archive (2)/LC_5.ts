function longestPalindrome(s: string): string {
  if (s.length === 1) {
    return s;
  }
  let odd = "";
  let even = "";

  for (let i = 0; i < s.length - 1; i++) {
    let localEven = expandFromMid(i, i + 1, s);

    if (localEven.length > even.length) {
      even = localEven;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    let localOdd = expandFromMid(i, i, s);
    if (localOdd.length > even.length) {
      even = localOdd;
    }
  }

  //   console.log("Even: ", even);
  //   console.log("Odd: ", odd);
  return even.length > odd.length ? even : odd;
}

const expandFromMid = (
  left: number,
  right: number,
  testString: string
): string => {
  let pal = "";
  while (left >= 0 && right < testString.length) {
    if (testString[left] === testString[right]) {
      pal = testString.substring(left, right + 1);
      //   console.log("pal: ", pal);
      left -= 1;
      right++;
    } else {
      break;
    }
  }

  return pal;
};

const tests1 = "babad";
const tests2 = "cbbd";
const tests3 = "a";

console.log(longestPalindrome(tests3));
//console.log(longestPalindrome(tests2));
