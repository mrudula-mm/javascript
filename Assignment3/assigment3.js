// 5.Create a self-invoking function to console you name.
/* eslint-disable func-names */
/* eslint-disable no-console */
(function () {
  const name = 'mrudula';
  console.log(name);
}());
// 3 Use constructor method to console all elements of the passed array in
// javascript (the array will be passed to the constructor method)
// eslint-disable-next-line no-unused-vars
class ArrayClass {
  constructor(inputArray) {
    this.array = inputArray;
    this.logElements = function () {
      for (let i = 0; i < this.array.length; i += 1) {
        console.log(this.array[i]);
      }
    };
  }
}
const myArray = [1, 2, 3, 4, 5];
const logger = new ArrayClass(myArray);
logger.logElements();
// ****************7**************************
// 7.{ data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},
//   {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data array item with id as '24'.
//  (consider that the data arrays order will be
//   different every time you get, so write code in such a way that
//  given any object it will remove the item with
//   id as 24 if it exists )
const inputData = {
  data: [
    { a: 'one', id: '22' },
    { a: 'four', id: '7' },
    { a: 'six', b: '2' },
    { a: 'sixty', id: '24' },
    { a: 'five', id: '212' },
  ],
};

const removedElement = '24';

inputData.data = inputData.data.filter((item) => item.id !== removedElement);

console.log(inputData);
// ***************1**************************
// 1.['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement
// inside a map function and
// console each item by using switch statement.
const array1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
// eslint-disable-next-line array-callback-return
array1.map((item) => {
  // eslint-disable-next-line default-case
  switch (array1.indexOf(item)) {
    case array1.indexOf(item):
      console.log(item);
      break;
    case 'default':
      console.log(item);
      break;
  }
});

// ****************2*************************
// 2.[1, 2, 3, 4. 5, 6] : Write a closure function to delete
//  indexes 5 and 2 of this array.
function removeElement(arr, deleteElement) {
  return arr.filter((element, indexNumber) => !deleteElement.includes(indexNumber));
}
const array = [1, 2, 3, 4, 5, 6];
const deleteElement = [2, 5];
const newArray = removeElement(array, deleteElement);
console.log(newArray);
// ******************6***********************
// 6.{a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an
//  array consisting of all the keys of the given object in reverse order.
//   (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
const objectArray = {
  a: 'one',
  b: '2',
  f: '5',
  c: '33',
  p: 'do',
  q: 'one',
};
const reverseArray = (Object.keys(objectArray));
console.log(reverseArray.reverse(reverseArray));
// ******************8***********************
// 8.Given var string = "Javascript is the King of the web."
// a) Get the length of the string.
// eslint-disable-next-line no-unused-vars
const string = 'Javascript is the king of the web';
console.log(string);
const lengthOfString = string.length;
console.log(lengthOfString);
// *****************************************
// b) Print the 8th character of the string without using any function.
const character = string[7];
console.log(character);
// *****************************************
// d) Get the position of the word "King" in string.
const wordTofind = 'king';
const positionOfWord = string.indexOf(wordTofind);
console.log(`${positionOfWord}`);
// *****************************************
// e) Replace "King" with "Emperor".
console.log(string.replace('king', 'Emperor'));
// *****************************************
// f) Insert the string "new” before the word "King".
const n = string.lastIndexOf('king');
const str2 = `${string.substring(0, n)} new ${string.substring(n)}`;
console.log(str2);
// *****************************************
// g) Get the words in string as an array.
const stringArray = string.split(' ');
console.log(stringArray);
// *****************************************
// h) Extract and print the words "is the King" from string.
const result = string.substring(10, 22);
console.log(result);
// *****************************************
// i) Get the count of occurrences of the strings "the" and "of" in string.
let countOfThe = 0;
let countOfOf = 0;
for (let i = 0; i < stringArray.length; i += 1) {
  if (stringArray[i] === 'the') {
    countOfThe += 1;
  } else if (stringArray[i] === 'of') {
    countOfOf += 1;
  }
}
console.log(countOfThe);
console.log(countOfOf);
// j) pad string with "*" and set the total length of the
//  string as 30, displayed at right side.
const padString = (string.slice(0, 30));
const news = padString.padEnd(string.length, '*');
console.log(news);
console.log(padString.length);
// ******************4***********************
// Create a function that takes 2 arguments, 1st argument being any array of items,
// 2nd being any one of the item name either in the passed array or not in the passed
// array, the function should delete the passed item if it exists in the array, if it
// doesn't exist then the item should be inserted into the array, finnally console the output.
function arrayFunction(arrayItem, item) {
  const index = arrayItem.indexOf(item);
  if (index !== -1) {
    arrayItem.splice(index, 1);
  } else {
    arrayItem.push(item);
  }
  console.log(arrayItem);
}
const resultedArray = ['car', 'bike', 'cycle'];
arrayFunction(resultedArray, 'bike');
arrayFunction(resultedArray, 'motorcycle');
