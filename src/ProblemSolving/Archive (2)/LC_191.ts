function hammingWeight(n: number): number {
  //first find the binary of the n

  const binaryRep = getBinaryRepresentation(n);

  //Sum the digits
  return sumDigits(binaryRep);
}

function getBinaryRepresentation(n: number): number[] {
  console.log("n: ", n);
  let binaryString: number[] = [];

  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    console.log("i: ", i);
    console.log(i % 2);
    binaryString.push(i % 2);
  }

  console.log("binary array: ", binaryString);

  return binaryString;
}

function sumDigits(digitArray: number[]): number {
  let sum = 0;

  digitArray.forEach((v: number) => {
    sum += v;
  });

  console.log("sum: ", sum);

  return sum;
}

hammingWeight(2147483645);
