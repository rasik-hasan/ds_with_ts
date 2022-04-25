export const testPeekingIterator = () => {
  console.log("test peeking");

  class Iterator {
    hasNext(): boolean {
      return true;
    }

    next(): number {
      return 1;
    }
  }

  class PeekingIterator {
    constructor(iterator: Iterator) {}

    peek(): number {}

    next(): number {}

    hasNext(): boolean {}
  }
};
