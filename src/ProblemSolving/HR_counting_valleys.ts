export const testCountingValley = () => {
  function countingValleys(steps: number, path: string): number {
    let currentSum = 0;
    let valleyNumber = 0;
    let lock = false;

    const pathArray = path.split("");

    // console.log("pathArray: ", pathArray);

    pathArray.forEach((pathItem) => {
      if (pathItem === "D") {
        currentSum -= 1;
      } else if (pathItem === "U") {
        currentSum += 1;
      }

      if (currentSum < 0 && !lock) {
        valleyNumber += 1;
        lock = true;
      } else if (currentSum >= 0) {
        lock = false;
      }

      //   console.log(
      //     "currentSum:",
      //     currentSum,
      //     "lock:",
      //     lock,
      //     "valleyNumber: ",
      //     valleyNumber
      //   );
    });

    // console.log("valleyNumber: ", currentSum);

    console.log("valley number: ", valleyNumber);

    return valleyNumber;
  }

  const steps = 8;
  const path = "UDDDUDUU";

  countingValleys(steps, path);
};
