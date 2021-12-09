export interface NewDS<T> {
  size(): number;
  isEmpty(): boolean;
  getAt(index: number): T;
  setAt(index: number, elem: T): void;
  clear(): void;
  add(elem: T): void;
  removeAt(rm_index: number): T;
  remove(item: T): boolean;
  indexOf(item: T): number;
  contains(item: T): boolean;
  toString(): string;
  printAll(): void;
  originalSize(): number;
}

class DynamicArray<T> implements NewDS<T> {
  private arr: T[];
  private len: number = 0; //length user thinks array is
  private capacity: number = 0; // actual array size

  public constructor(capacity?: number) {
    this.capacity = capacity ?? 4;
    this.arr = new Array(this.capacity);
  }
  size(): number {
    return this.len;
  }
  isEmpty(): boolean {
    return this.arr.length > 0 ? false : true;
  }
  getAt(index: number): T {
    return this.arr[index];
  }
  setAt(index: number, elem: T): void {
    if (index > this.len - 1) {
      console.log("Index out of bounds");
    }
    this.arr[index] = elem;
  }
  clear(): void {
    this.arr.forEach((item, index) => {
      this.arr[index] = null;
    });
    //this.len = 0;
  }
  add(elem: T): void {
    this.len++;

    if (this.len > this.capacity) {
      const newDoubledArray = new Array(this.capacity * 2);
      this.arr.forEach((arrayItem, index) => {
        newDoubledArray[index] = arrayItem;
      });
      newDoubledArray[this.len - 1] = elem;
      this.arr = newDoubledArray;
      this.capacity = this.arr.length;
    } else {
      this.arr[this.len - 1] = elem;
    }
  }
  removeAt(rm_index: number): T {
    let removedItem = this.arr[rm_index];

    const newArray = new Array(this.arr.length);

    for (let i = 0, j = 0; i < newArray.length; i++, j++) {
      if (this.arr[j] === removedItem) {
        j++;
      }
      newArray[i] = this.arr[j] ?? null;
    }

    this.arr = newArray;

    this.len--;
    return removedItem;
  }
  remove(item: T): boolean {
    if (!this.contains(item)) {
      return false;
    } else {
      this.arr.forEach((arrayItem, index) => {
        if (arrayItem === item) {
          this.arr[index] = null;
        }
      });
    }
  }
  indexOf(item: T): number {
    return this.arr.indexOf(item);
  }
  contains(item: T): boolean {
    return this.arr.includes(item);
  }
  toString(): string {
    const userSizeArray = this.arr.slice(0, this.len);

    return userSizeArray.join(",");
  }

  printAll() {
    console.log(this.arr);
  }

  originalSize() {
    return this.arr.length;
  }
}

const newDynamicArr = new DynamicArray<string>();
newDynamicArr.printAll();
console.log("user pov size: ", newDynamicArr.size());
console.log("original size: ", newDynamicArr.originalSize());

newDynamicArr.add("a");
console.log(newDynamicArr.size());
newDynamicArr.printAll();

newDynamicArr.add("b");
newDynamicArr.add("c");
newDynamicArr.add("d");
newDynamicArr.printAll();

newDynamicArr.add("e");
newDynamicArr.printAll();

newDynamicArr.remove("b");
newDynamicArr.printAll();

newDynamicArr.removeAt(2);
newDynamicArr.printAll();
console.log(newDynamicArr.size());

console.log(newDynamicArr.contains("a"));

console.log(newDynamicArr.toString());

console.log(newDynamicArr.indexOf("d"));

console.log(newDynamicArr.getAt(2));

newDynamicArr.setAt(0, "f");

newDynamicArr.printAll();

console.log(newDynamicArr.size());
newDynamicArr.add("e");

newDynamicArr.printAll();

console.log(newDynamicArr.size());

newDynamicArr.clear();

newDynamicArr.printAll();

console.log(newDynamicArr.size());
