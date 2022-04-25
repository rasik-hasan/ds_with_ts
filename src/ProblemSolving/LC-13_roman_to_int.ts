export const testRomanToInt = () => {
  console.log("roman to int");

  const s1 = "III";

  const s2 = "LVIII";

  const s3 = "MCMXCIV";

  function romanToInt(s: string): number {
    const romanMapped: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    const subtractItems = ["IV", "IX", "XL", "XC", "CD", "CM"];

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
      const current = s[i];
      const next = s[i + 1];

      const pairr = current + next;

      if (subtractItems.includes(pairr)) {
        sum += -romanMapped[current];
      } else {
        sum += romanMapped[current];
      }
    }

    return sum;
  }

  console.log(romanToInt(s3));
};
