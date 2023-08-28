/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line no-console, linebreak-style
// eslint-disable-next-line no-unused-vars
const numberVariable = 25;
// eslint-disable-next-line no-console
console.log('numberVariable:', typeof numberVariable);
const stringVariable = 'Ram';
// eslint-disable-next-line no-console
console.log('stringVariable:', typeof stringVariable);
const booleanVariable = true;
// eslint-disable-next-line no-console
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
// eslint-disable-next-line no-useless-concat
const withoutTempalteLiterals = numberVariable + ' ' + ' ' + stringVariable + ' ' + booleanVariable + ' ' + nullVariable + ' ' + undefinedVariable;
console.log('withoutTempalteLiterals:', withoutTempalteLiterals);