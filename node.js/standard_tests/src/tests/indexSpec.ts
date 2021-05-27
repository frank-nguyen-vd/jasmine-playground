import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');

describe('Removing third item from an array', () => {
  it("return an array with third item remove", () => {
      expect(arrays.cut3([1, 2, 3, 4])).toEqual([1, 2, 4])
      expect(arrays.cut3(['1', '2', '3', '4'])).toEqual(['1', '2', '4'])
  });
    
  it("return original array if there are less than 3 items", () => {
      expect(arrays.cut3([1, 2])).toEqual([1, 2]);
      expect(arrays.cut3([])).toEqual([]);      
  });
    
})

// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply(five, 8));
// console.log(arrays.lgNum(mixArr));
