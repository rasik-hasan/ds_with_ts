export const testSockMerchant = () => {
  function sockMerchant(n: number, ar: number[]): number {
    // Write your code here

    //Put in map
    const sockMap: { [key: string]: number } = {};
    // go through all the keys and get multiple of 2 and add to sum.

    ar.forEach((sock) => {
      console.log("Sock:", sock);
      if (!sockMap[sock]) {
        sockMap[sock] = 1;
      } else {
        sockMap[sock] = sockMap[sock] + 1;
      }
    });

    console.log("Sockmap: ", sockMap);

    let sum = 0;

    Object.keys(sockMap).forEach((item) => {
      const multipleOfTwo = Math.floor(sockMap[item] / 2);
      sum += multipleOfTwo;
    });

    console.log("Sum: ", sum);

    return sum;
  }

  const n = 6;
  const ar = [1, 1, 2, 2, 3, 3];
  sockMerchant(n, ar);
};
