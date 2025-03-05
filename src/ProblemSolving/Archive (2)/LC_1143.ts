console.log("hello world");

function longestCommonSubsequence(text1: string, text2: string): number {
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

const test1a = "abcde",
  test1b = "ace"; //3

const test2a = "abc",
  test2b = "abc"; //3

const test3a = "abc",
  test3b = "def"; //0

// console.log("test1Result:", longestCommonSubsequence(test1a, test1b));
console.log("test2Result:", longestCommonSubsequence(test2a, test2b));
// console.log("test3Result:", longestCommonSubsequence(test3a, test3b));

//subsequence = subString but keeps order

// if it matches then add 1 with the value in diagonal right
// if it doesnt then take max(below, right)

//result is in 0,0
