import { BST } from "./BST";
export const testBST = () => {
  const BSTDS = new BST();

  BSTDS.add(6);
  BSTDS.add(2);
  BSTDS.add(3);
  BSTDS.add(1);
  BSTDS.add(9);
  BSTDS.add(4);
  BSTDS.add(10);

  console.log("bst size: ", BSTDS.size());
  BSTDS.printPreOrderTraversal(BSTDS.root);
};