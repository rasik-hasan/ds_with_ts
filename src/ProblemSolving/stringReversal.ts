export const testStringReversal = () => {
  //console.log("string reversal!!");

  const input = "hello";

  const reverse = (inputString: string): string => {
    console.log(inputString);
    if (inputString === "") {
      return inputString;
    }

    const result = reverse(inputString.substring(1));
    const predicate = inputString.charAt(0);

    console.log("result: ", result, "predicate: ", predicate);
    return result + predicate;
  };

  console.log("reversed:", reverse(input));
};
