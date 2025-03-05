function countSubstrings(s: string): number {
  let countOdd = 0;
  let countEven = 0;

  for (let i = 0; i < s.length; i++) {
    let odd = expandFromMidNew(i, i, s);
    countOdd += odd;
  }

  for (let i = 0; i < s.length; i++) {
    let even = expandFromMidNew(i, i + 1, s);
    countEven += even;
  }

  return countOdd + countEven;
}

const expandFromMidNew = (left: number, right: number, s: string): number => {
  let localCount = 0;

  while (left >= 0 && right < s.length) {
    // console.log("left: ", left, "right: ", right);
    if (s[left] === s[right]) {
      //   console.log(s[left], s[right]);
      localCount++;
      left--;
      right++;
    } else {
      break;
    }
  }

  return localCount;
};

const testss1 = "abc";
const testss2 = "aaa";

console.log(countSubstrings(testss1));
console.log(countSubstrings(testss2));
