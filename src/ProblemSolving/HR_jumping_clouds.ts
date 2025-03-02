export const testJumpingClouds = () => {
  function jumpingOnClouds(c: number[]): number {
    // console.log(c);

    let index = 0;
    let numberOfJumps = 0;

    while (index <= c.length) {
      if (c[index + 2] === 0 && index + 2 < c.length) {
        index = index + 2;
        numberOfJumps += 1;
      } else if (c[index + 1] === 0 && index + 1 < c.length) {
        index = index + 1;
        numberOfJumps += 1;
      } else {
        index = index + 1;
      }
    }

    return numberOfJumps;
  }

  const clouds = [0, 1, 0, 0, 0, 1, 0];
  //   console.log(clouds.splice(2));

  console.log(jumpingOnClouds(clouds));
};
