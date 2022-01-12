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
  private root: BSTNodeI<T> | null = null;

  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  add(item: T): boolean;
  add(node: BSTNodeI<T>, item: T): BSTNodeI<T>;
  add(node: any, item?: any): boolean | BSTNodeI<T> {
    throw new Error("Method not implemented.");
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
  printPreOrderTraversal(): void {
    throw new Error("Method not implemented.");
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
