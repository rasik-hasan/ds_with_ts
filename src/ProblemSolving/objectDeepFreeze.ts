export const testDeepFreeze = () => {
  const arr = ["111", "222"];

  const newObj: any = {
    "111": { name: "Rasik", age: 24 },
    "222": { name: "Rasik", age: 24 },
    "333": { name: "Rasik", age: 24 },
    "444": { name: "Rasik", age: 24 },
    "555": { name: "Rasik", age: 24 },
    "666": { name: "Rasik", age: 24 },
  };

  const parentObj = {
    netPage: "something",
    newObj,
  };

  const deepFreeze = (obj: any) => {
    Object.keys(obj).forEach((prop) => {
      if (typeof obj[prop] === "object") deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  };

  deepFreeze(parentObj);

  const copyParentObj = JSON.parse(JSON.stringify(parentObj));

  arr.forEach((id) => {
    delete copyParentObj.newObj[id];
  });

  //delete copyParentObj["netPage"];

  console.log(copyParentObj);
};
