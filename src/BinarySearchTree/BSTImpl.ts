import { BST } from "./BST";
export const testBST = () => {
  const BSTDS = new BST();

  BSTDS.add(6);
  BSTDS.add(2);
  BSTDS.add(9);
  BSTDS.add(3);
  console.log(BSTDS);
  BSTDS.printPreOrderTraversal(BSTDS.root);
};
