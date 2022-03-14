import { BSTI, BSTNodeI } from "./BinarySearchTreeInterface";

class BSTNode<T> implements BSTNodeI<T> {
  data: T;
  leftChild: BSTNodeI<T> | null;
  rightChild: BSTNodeI<T> | null;

  constructor(
    data: T,
    leftChild: BSTNodeI<T> | null,
    rightChild: BSTNodeI<T> | null
  ) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

export class BST<T> implements BSTI<T> {
  private nodeCount = 0;
  root: BSTNodeI<T> | null = null;

  //tested and correct
  isEmpty(): boolean {
    if (this.nodeCount === 0) {
      return true;
    } else return false;
  }

  //tested and correct
  size(): number {
    return this.nodeCount;
  }

  //tested and correct
  add(item: T): boolean {
    if (!this.root) {
      this.root = new BSTNode(item, null, null);
    } else {
      const result = this.addItem(this.root, item);
      // console.log(result);
    }

    this.nodeCount++;
    return true;
  }

  //tested and correct
  addItem(node: BSTNodeI<T> | null, item: T): BSTNodeI<T> | null {
    if (!node) {
      return new BSTNode(item, null, null);
    }
    if (item < node.data) {
      node.leftChild = this.addItem(node.leftChild, item);
    } else {
      node.rightChild = this.addItem(node.rightChild, item);
    }
    return node;
  }

  //TO DO
  remove(item: T): boolean {
    if (this.contains(item)) {
      this.removeItem(this.root, item);
      this.nodeCount--;
      return true;
    } else {
      return false;
    }
  }

  removeItem(node: BSTNodeI<T> | null, item: T): any {
    if (!node) {
      return node;
    } else if (item < node.data) {
      node.leftChild = this.removeItem(node.leftChild, item);
      return node;
    } else if (item > node.data) {
      node.rightChild = this.removeItem(node.rightChild, item);
      return node;
    } else if (
      item === node.data &&
      node.leftChild === null &&
      node.rightChild === null
    ) {
      return null;
    } else if (item === node.data && (node.leftChild || node.rightChild)) {
      if (node.leftChild) {
        return node.leftChild;
      } else {
        return node.rightChild;
      }
    } else if (item === node.data && node.leftChild && node.rightChild) {
      //wrong
      node = this.removeItem(node.leftChild, item);
      return node;
    }

    return node;
  }

  height(): number {
    throw new Error("Method not implemented.");
  }

  //tested and correct
  contains(item: T): boolean {
    const result = this.containsItem(this.root, item);

    return result;
  }
  containsItem(node: BSTNodeI<T> | null, item: T): boolean {
    //console.log(node?.data, item);
    if (!node) {
      return false;
    } else if (item < node.data) {
      return this.containsItem(node.leftChild, item);
    } else if (item > node.data) {
      return this.containsItem(node.rightChild, item);
    } else {
      return true;
    }
  }

  heightRecur(node: BSTNodeI<T>): number {
    throw new Error("Method not implemented.");
  }

  //tested and correct
  printPreOrderTraversal(node: BSTNodeI<T> | null): void {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.printPreOrderTraversal(node.leftChild);
    this.printPreOrderTraversal(node.rightChild);
  }

  //tested and correct
  printPostOrderTraversal(node: BSTNodeI<T> | null): void {
    if (!node) {
      return;
    }

    this.printPostOrderTraversal(node.leftChild);
    this.printPostOrderTraversal(node.rightChild);
    console.log(node.data);
  }

  //tested and correct
  printInorderTraversal(node: BSTNodeI<T> | null): void {
    if (!node) {
      return;
    }

    this.printInorderTraversal(node.leftChild);
    console.log(node.data);
    this.printInorderTraversal(node.rightChild);
  }
  printLevelOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }
  findMin(node: BSTNodeI<T>): BSTNodeI<T> {
    throw new Error("Method not implemented.");
  }
  findMax(node: BSTNodeI<T>): BSTNodeI<T> {
    throw new Error("Method not implemented.");
  }
}
