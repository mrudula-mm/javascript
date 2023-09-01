/* eslint-disable no-console */
const numberVariable = 25;
console.log('numberVariable:', typeof numberVariable);
const stringVariable = 'Ram';
console.log('stringVariable:', typeof stringVariable);
const booleanVariable = true;
console.log('booleanVariable:', typeof booleanVariable);
const nullVariable = null;
console.log('nullVariable:', typeof nullVariable);
let undefinedVariable;
console.log('undefinedVariable:', typeof undefinedVariable);
const objectVariable = { firstName: 'Ram', lastName: 'Sedhu' };
console.log('objectVariable:', typeof objectVariable);
const arrayVariable = [1, 2, 3, 4];
console.log('arrayVariable:', typeof arrayVariable);
const usingTemplateLiterals = `${numberVariable} ${stringVariable} ${booleanVariable} ${nullVariable} ${undefinedVariable}`;
console.log('usingTemplateLiterals:', usingTemplateLiterals);
const withoutTempalteLiterals = numberVariable + ' ' + stringVariable + ' ' + booleanVariable + ' ' + nullVariable + ' ' + undefinedVariable;
console.log('withoutTempalteLiterals:', withoutTempalteLiterals);
// eslint-disable-next-line no-alert
alert('Welcome');
