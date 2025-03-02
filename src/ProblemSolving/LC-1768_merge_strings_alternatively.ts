export const testMergeStringsAlternatively = () => {
  function mergeAlternately(word1: string, word2: string): string {
    let word1Ptr = 0;
    let word2Ptr = 0;
    const resultWord = [];

    while (word1Ptr < word1.length || word2Ptr < word2.length) {
      if (word1Ptr < word1.length) {
        resultWord.push(word1[word1Ptr]);
        word1Ptr++;
      }

      if (word2Ptr < word2.length) {
        resultWord.push(word2[word2Ptr]);
        word2Ptr++;
      }
    }

    return resultWord.join("");
  }
};
