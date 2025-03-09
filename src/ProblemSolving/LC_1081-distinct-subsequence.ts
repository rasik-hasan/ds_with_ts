export const testDistinctSubsequence = () => {
  const isPrevBigger = (resultStack: string[], currentChar: string) => {
    const check = resultStack[resultStack.length - 1] > currentChar;
    console.log("isPrevBigger: ", check);
    return check;
  };

  const isPrevAppearLater = (
    lastOccMap: { [key: string]: number },
    prevChar: string,
    currentIndex: number
  ) => {
    const check = lastOccMap[prevChar] > currentIndex;
    console.log("isPrevAppearLater:", check);

    return check;
  };

  function smallestSubsequence(s: string): string {
    const lastOccMap: { [key: string]: number } = {};

    const visited: string[] = [];

    const resultStack: string[] = [];

    for (let i = 0; i < s.length; i++) {
      lastOccMap[s[i]] = i;
    }

    visited[0] = s[0];
    resultStack[0] = s[0];

    for (let i = 1; i < s.length; i++) {
      console.log("resultStack: ", resultStack, "visited: ", visited);
      let popped = true;

      if (!visited.includes(s[i])) {
        while (popped) {
          if (
            isPrevBigger(resultStack, s[i]) &&
            isPrevAppearLater(
              lastOccMap,
              resultStack[resultStack.length - 1],
              i
            )
          ) {
            console.log("ResultStack1: ", resultStack);

            const poppedResultStack = resultStack.pop();
            const poppedVisited = visited.pop();
            popped = true;
            console.log("ResultStack2: ", resultStack);
          } else {
            popped = false;
          }
        }

        resultStack.push(s[i]);
        visited.push(s[i]);
      }
    }

    // remove from resultStack and visited if
    // prev characters in stack is lexicographically greater than current character
    // prev big characters shows up later than current character
    console.log("lastOccMap: ", lastOccMap);

    return resultStack.join("");
  }

  const test1 = "bcabc"; //abc

  const test2 = "cbacdcbc"; // acdb
  console.log(smallestSubsequence(test1));
};

function smallestSubsequenceNormal(s: string): string {
  const finalSubstring: string[] = [];

  const charMap: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (!charMap.hasOwnProperty(s[i])) {
      charMap[s[i]] = 1;
      finalSubstring.push(s[i]);
    }
  }

  return finalSubstring.join("");
}
