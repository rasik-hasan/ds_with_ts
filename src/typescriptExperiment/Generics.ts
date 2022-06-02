export const testGenerics = () => {
  console.log("test generics");

  //no generics, fixed type
  function identity(arg: number): number {
    return arg;
  }

  identity(1);

  //no generics, any type

  function identity_any(arg: any): any {
    return arg;
  }

  identity_any(1);

  //generics
  function identity_generic<Type>(arg: Type): Type {
    return arg;
  }

  let output: string = identity_generic<string>("hello");
  console.log(output);

  function identityLength<Type>(arg: Type): Type {
    //console.log(arg.length); // cannot do this, may or may not have length property
    return arg;
  }

  function identityArray<Type>(arg: Type[]): Type[] {
    console.log(arg.length); // this is okay
    return arg;
  }

  // functionss
  function identityTypeFunc<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentity: <Type>(arg: Type) => Type = identityTypeFunc;

  function identityObjectLiteral<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentityObjectLiteral: { <Type>(arg: Type): Type } =
    identityObjectLiteral;

  //generic interface
  interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }

  function identityForGenInterface<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentityForGenInterface: GenericIdentityFn = identityForGenInterface;

  interface GenericInterface<Type> {
    (arg: Type): Type;
  }

  const genericInterfaceFunc: GenericInterface<number> =
    identityForGenInterface;

  // Generic classes
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
      this.zeroValue = zeroValue;
      this.add = add;
    }
  }

  const addFunc = function (x: any, y: any): any {
    return x + y;
  };
  let myGenericNumber = new GenericNumber<number>(0, addFunc);
  let myGenericString = new GenericNumber<string>("", addFunc);

  //extending interface to have certain properties
  interface LengthWise {
    length: number;
  }

  function logIdentity<Type extends LengthWise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
  }

  //logIdentity(3) //won't work
  logIdentity([3]);
  logIdentity({ length: 10, value: 3 });

  function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  console.log(getProp(x, "a"));
  //console.log(getProp(x, "m"))// will not work

  function create<T>(c: { new (): T }): T {
    return new c();
  }

  class BeeKeeper {
    hasMask: boolean = true;
  }

  class ZooKeeper {
    nameTag: string = "Mikle";
  }

  class Animal {
    numLegs: number = 4;
  }

  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }

  function createInstance<A extends Animal>(c: new () => A) {
    return new c();
  }

  createInstance(Lion).keeper.nameTag;
  createInstance(Bee).keeper.hasMask;
};
