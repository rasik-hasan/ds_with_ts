export class UnionFind {
  //number of elements in this union find
  private size: number;

  // used to track the size of each groups
  private eachGroupSize: number[];

  // id[i] points to the parent of i, if id[i] = i, then i is a root node
  // basically we modify or calculate this array
  private id: number[];

  //tracks the number of groups in the union Find
  private numOfGroups: number;

  constructor(size: number) {
    if (size <= 0) throw new Error("size cannot be less than 0");

    this.size = size;

    this.id = new Array<number>(size);
    this.eachGroupSize = new Array<number>(size);

    //because initially, all items are it's own group,
    //it will decrease everytime unify is called.
    this.numOfGroups = size;

    //initialize all elements to itself, id[i] = i
    for (let i = 0; i < size; i++) {
      this.id[i] = i;
      this.eachGroupSize[i] = 1;
    }
  }

  //find the root of the element
  public find(p: number): number {
    let root = p;

    while (this.id[root] !== root) {
      root = this.id[root];
    }

    //path compression
    while (p !== root) {
      const parent = this.id[p];
      this.id[p] = root;
      p = parent;
    }

    return root;
  }

  //return if p,q are in the same group
  private connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  //return number of elements in this unionFind
  public getSize(): number {
    return this.size;
  }

  public getNumberOfGroups(): number {
    return this.numOfGroups;
  }

  public getGroupSize(p: number): number {
    return this.eachGroupSize[this.find(p)];
  }

  public unify(p: number, q: number) {
    if (this.connected(p, q)) {
      return;
    }

    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (this.getGroupSize(p) >= this.getGroupSize(q)) {
      this.id[rootQ] = rootP;
      this.eachGroupSize[rootP] += this.eachGroupSize[rootQ];
      this.eachGroupSize[rootQ] = 0;
    } else {
      this.id[rootP] = rootQ;
      this.eachGroupSize[rootQ] += this.eachGroupSize[rootP];
      this.eachGroupSize[rootP] = 0;
    }

    this.numOfGroups--;

    this.printDetails();
  }

  public printDetails() {
    console.log(this.id, this.getNumberOfGroups());
  }
}
