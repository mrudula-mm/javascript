/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
/* **********1.a*********** */
// ["1", "2", "3", "4", "5", "6", "7"]
// a. Remove number "6" from the array and console the length of the array.
const array1 = ['1', '2', '3', '4', '5', '6', '7'];
console.log(array1);
array1.splice(5, 1);
console.log(array1);
console.log(array1.length);
/* ***********1.b********** */
// eslint-disable-next-line max-len
// b. Convert all the items of the array to data type number and console each items data
//  type, use any of the array iteration methods provided by JS for iteration
for (let i = 0; i < array1.length; i += 1) {
  array1[i] = Number(array1[i]);
  console.log(typeof array1[i]);
}
/* ***********1.c********** */
// c. Remove last three items of the array, use JS provided array method,
//  then console the array and then add "one" and "two" (strings) to the beginning
//   of the array and console the array.
const array2 = ['1', '2', '3', '4', '5', '6', '7'];
array2.splice(4, 6);
console.log(array2);
array2.unshift('one', 'two');
console.log(array2);
/* **********1.d*********** */
// d. Using any one of the array iteration methods console the string concatenation
// of all items of the array and also console the sum of all the items
//  ( convert to integer before calculating)
const array3 = ['1', '2', '3', '4', '5', '6', '7'];
let stringConcatenation = '';
array3.forEach((item) => {
  stringConcatenation += item;
});
console.log(stringConcatenation);
let sum = 0;
for (let i = 0; i < array3.length; i += 1) {
  array3[i] = Number(array3[i]);
  console.log(typeof array3[i]);
  sum += array3[i];
}
console.log(sum);
/* *********1.e************ */
// e. Filter out item "3" from the array and console the array (use any array method)
console.log(array3);
array3.splice(2, 1);
console.log(array3);
/* *********1.f************ */
// f. Iterate the array and console the item, when item is either "3", "6" or "7"
const array4 = ['1', '2', '3', '4', '5', '6', '7'];
console.log(array4);
for (let i = 0; i < array4.length; i += 1) {
  if (array4[i] === '3' || array4[i] === '6' || array4[i] === '7') {
    console.log(array4[i]);
  }
}
/* *********1.g************ */
// g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and
//  console only if both items of the array have same data type. (Compare each item of
// this array with each item of the other array)
const givenArray = [1, 2, '3', 4, 5, 6, '7'];
for (let i = 0; i < givenArray.length; i += 1) {
  if (typeof givenArray[i] === typeof array4[i]) {
    console.log(givenArray[i]);
  }
}
/* *********1.h************ */
// h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index
//  value and console the result only if result is greater than 40.
const array9 = [0, 2, 3, 7, 5, 6, 8];
for (let i = 0; i < array9.length; i += 1) {
  const result = array9[i] * i;
  if (result > 40) {
    console.log(result);
  }
}
/* *********1.i************ */
// i. Create two arrays with five items each and merge the array
// into a single array and then console it.
const array5 = [1, 2, 3, 4, 5];
console.log(array5);
const array6 = [6, 7, 8, 9, 0];
console.log(array6);
const mergedArray = array5.concat(array6);
console.log(mergedArray);
/* *********2************ */
// Console this star pattern
for (let i = 1; i <= 5; i += 1) {
  const spaces = ' '.repeat(5 - i);
  const stars = '* '.repeat(i);
  console.log(spaces + stars);
}
