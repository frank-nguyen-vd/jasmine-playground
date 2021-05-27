import arrays from "../utilities/arrays.js";
import numbers from "../utilities/numbers.js";
import strings from "../utilities/strings.js";

const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ("15" as unknown as number) % 2;
const five = parseInt("5");

describe("Removing third item from an array", () => {
  it("returns an array with third item remove", () => {
    expect(arrays.cut3([1, 2, 3, 4])).toEqual([1, 2, 4]);
    expect(arrays.cut3(["1", "2", "3", "4"])).toEqual(["1", "2", "4"]);
  });

  it("returns original array if there are less than 3 items", () => {
    expect(arrays.cut3([1, 2])).toEqual([1, 2]);
    expect(arrays.cut3([])).toEqual([]);
  });
});

describe("Adding two numbers", () => {
  it("returns their sum if both numbers are non-negative", () => {
    expect(numbers.sum(0, 10000000000)).toEqual(10000000000);
  });

  it("returns their sum if both numbers are non-positive", () => {
    expect(numbers.sum(-1, -10000000000)).toEqual(-10000000001);
  });

  it("returns their sum if one number is positive and the other is negative", () => {
    expect(numbers.sum(-1, 1)).toEqual(0);
  });
});
