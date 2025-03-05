function longestPalindromeSubseq(s: string): number {
  const text1 = s;
  const text2 = s.split("").reverse().join("");

  console.log("text2 : ", text2);

  const text1Length = text1.length;
  const text2Length = text2.length;
  const resultArray: number[][] = [];

  console.log(text1Length, text2Length);

  for (let i = 0; i <= text2Length; i++) {
    resultArray[i] = [];
    for (let j = 0; j <= text1Length; j++) {
      resultArray[i][j] = 0;
    }
  }

  console.log(resultArray);

  for (let i = text2Length - 1; i > -1; i--) {
    for (let j = text1Length - 1; j > -1; j--) {
      //   console.log(i, j);
      if (text2[i] === text1[j]) {
        resultArray[i][j] = 1 + resultArray[i + 1][j + 1];
      } else {
        resultArray[i][j] = Math.max(
          resultArray[i + 1][j],
          resultArray[i][j + 1]
        );
      }
    }
  }

  console.log(resultArray);

  return resultArray[0][0];
}

const test1 = "bbbab";
const test2 = "cbbd";

console.log(longestPalindromeSubseq(test1));
console.log(longestPalindromeSubseq(test2));
