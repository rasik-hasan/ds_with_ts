import { UnionFind } from "./UnionFind";

export const testUnionFind = () => {
  console.log("test union find");

  const newUnionFind = new UnionFind(10);

  newUnionFind.printDetails();

  newUnionFind.unify(0, 9);
  newUnionFind.unify(8, 9);
  newUnionFind.unify(3, 4);
  newUnionFind.unify(4, 9);
  newUnionFind.unify(6, 7);
  newUnionFind.unify(4, 6);
  newUnionFind.unify(1, 2);
  newUnionFind.unify(2, 6);
  newUnionFind.unify(6, 5);
  newUnionFind.unify(2, 7);
};
