function repeatedString(s: string, n: number): number {
  // Write your code here

  let countOfaInCurrent = 0;

  s.split("").forEach((item) => {
    if (item === "a") {
      countOfaInCurrent += 1;
    }
  });

  console.log("countOfA1st: ", countOfaInCurrent);

  const lengthOfS = s.length;

  const multiple = Math.floor(n / lengthOfS);

  console.log("multiple: ", multiple);

  const remainder = n % lengthOfS;

  console.log("remainder:", remainder);

  const repeatingRemainder = s.slice(0, remainder);

  console.log("repeatingRemainder:", repeatingRemainder);

  let remainderCount = 0;
  repeatingRemainder.split("").forEach((item) => {
    console.log("item: ", item);
    if (item === "a") {
      remainderCount += 1;
    }
  });

  return countOfaInCurrent * multiple + remainderCount;
}

const s = "aba"; //abaabaabaa
const n = 10;

console.log(repeatedString(s, n));
