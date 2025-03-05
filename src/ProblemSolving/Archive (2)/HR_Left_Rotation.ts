function rotLeft(a: number[], d: number): number[] {
  for (let i = 0; i < d; i++) {
    let temp = a[0];

    for (let j = 1; j < a.length; j++) {
      a[j - 1] = a[j];
    }

    a[a.length - 1] = temp;
  }

  return a;
}

const arrayToRotate = [1, 2, 3, 4, 5];
const rotate = 4;

console.log(rotLeft(arrayToRotate, rotate));
