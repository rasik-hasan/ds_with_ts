export const testAbbreviation = () => {
  function abbreviation(a: string, b: string): string {
    // Write your code here

    let matchCounter = 0;

    for (let i = 0; i < a.length; i++) {
      let matched = false;
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j] || a[i].toUpperCase() === b[j]) {
          matchCounter++;
          matched = true;
        }
      }
      if (!matched && a[i].toUpperCase() === a[i]) {
        matchCounter--;
      }
    }

    console.log("matchCounter: ", matchCounter);

    if (matchCounter === b.length) {
      return "YES";
    } else {
      return "NO";
    }
  }

  const test1 = "daBcd";
  const test2 = "ABC";

  const test3 = "AbcDE";
  const test4 = "AFDE";

  const test5 = "beFgH";
  const test6 = "EFG";

  console.log(abbreviation(test1, test2));
};
