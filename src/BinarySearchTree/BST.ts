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

  isEmpty(): boolean {
    if (this.nodeCount === 0) {
      return true;
    } else return false;
  }
  size(): number {
    return this.nodeCount;
  }
  add(item: T): boolean {
    if (!this.root) {
      this.root = new BSTNode(item, null, null);
    } else {
      this.addItem(this.root, item);
    }

    this.nodeCount++;
    return true;
  }

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

  remove(item: T): boolean;
  remove(node: BSTNodeI<T>, item: T): BSTNodeI<T>;
  remove(node: any, item?: any): boolean | BSTNodeI<T> {
    throw new Error("Method not implemented.");
  }
  height(): number;
  height(node: BSTNodeI<T>): number;
  height(node?: any): number {
    throw new Error("Method not implemented.");
  }
  contains(item: T): boolean;
  contains(node: BSTNodeI<T>, item: T): boolean;
  contains(node: any, item?: any): boolean {
    throw new Error("Method not implemented.");
  }
  printPreOrderTraversal(node: BSTNodeI<T> | null): void {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.printPreOrderTraversal(node.leftChild);
    this.printPreOrderTraversal(node.rightChild);
  }
  printPostOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }
  printInorderTraversal(): void {
    throw new Error("Method not implemented.");
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
