// 2.Store your basic details in local storage of the browser every time the
// page loads, then console them and finally delete them after 1 minute of
// the page load.
/* eslint-disable no-alert */
/* eslint-disable no-console */
function test() {
  const uid = document.getElementById('username').value;
  const pw = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  const user = localStorage.setItem('uid', uid);
  const pass = localStorage.setItem('pw', pw);
  const em = localStorage.setItem('email', email);
}
setTimeout(() => {
  localStorage.removeItem('uid');
  localStorage.removeItem('pw');
  localStorage.removeItem('email');
}, 60000);
// 1. Write a function to
// a. Calculate the height of the end user's browser screen
function screenFunction() {
  const height = window.innerHeight;
  return height;
}
const height = screenFunction();
console.log('Height:', height, 'px');
// b. To console the name of the web host
function hostNameFunction() {
  const webHostName = window.location.hostname;
  console.log('name of web host:', webHostName);
}
hostNameFunction();
// c.To show a warning message if there is no https
// protocol used in the visited website.
function protocolFunction() {
  if (window.location.protocol !== 'https:') {
    alert('Website not containing https');
  }
}
protocolFunction();
// d.To show an alert message after 10sec
// while the page is refreshed.
function refreshFunction() {
  setTimeout(() => {
    alert('Refresh after 10 seconds...!!!');
  }, 10000);
}
refreshFunction();
// ********9**********
// 9.When the control+enter key is pressed show an alert message. 
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'Enter') {
    alert('alert message for keys pressed');
  }
});
// *****4********
// Redirect to the homepage of google from the console.
// eslint-disable-next-line no-undef
console.log('https:www.google.com');
// ****************5*******************
// 5.Create a div with background color red, create buttons
// a.to hide the div
// b.to change the background color of the div
// c.to show your basic details on the div, the details should hide/show,
// on the click.
// main div hide
const hideBtn = document.getElementById('hide');
const mainDiv = document.getElementById('mainDiv');
mainDiv.hidden = false;
hideBtn.addEventListener('click', () => {
  if (mainDiv.hidden === false) {
    mainDiv.hidden = true;
    hideBtn.innerHTML = 'Show Div';
  } else {
    mainDiv.hidden = false;
    hideBtn.innerHTML = 'Hide Div';
  }
});

// change color
const colorBtn = document.getElementById('color');
mainDiv.style.backgroundColor = 'blue';
colorBtn.addEventListener('click', () => {
  if (mainDiv.style.backgroundColor === 'blue') {
    mainDiv.style.backgroundColor = 'red';
  } else {
    mainDiv.style.backgroundColor = 'blue';
  }
});

// show Details
const detailsBtn = document.getElementById('details');
const details = document.getElementById('detailsDiv');
details.hidden = true;
detailsBtn.addEventListener('click', () => {
  if (details.hidden === true) {
    details.hidden = false;
    detailsBtn.textContent = 'Show Details';
  } else {
    details.hidden = true;
    detailsBtn.textContent = 'Hide Details';
  }
});
// ********************8************************
// 8.Create a form with a text field which when submitted, will change the tab title
// to whatever is entered, limit the field to 50 characters, otherwise show an error
// message, and stay on the same page when submitted(it shouldn't refresh).
// eslint-disable-next-line no-unused-vars
function formSubmit() {
  const description = document.getElementById('description').value;
  const error = document.querySelector('#error');
  if (description.length > 50) {
    error.innerHTML = 'Description must be less than 50 characters';
    error.style.color = 'red';
  } else {
    error.innerHTML = '';
    document.getElementById('title').innerHTML = description;
  }
  return false;
}
// ******************6*********************
// 6.Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to
// 10 and show a message that "9 is fully occupied please select another number", when selected any
// number other than 9 it should show a message as "you selected 'particular number' " in a div, on
// hovering the div it should change the background color of the div into a highlighting shade,
// whilethe mouse pointer leaves the message area the background color should go back to as
// before(don't use CSS to attain the hovering functionality)
// eslint-disable-next-line no-unused-vars
function selectionChange() {
  const selectedNumber = document.getElementById('number');
  const number = selectedNumber.value;
  const showMsg = document.getElementById('message');

  if (number === '9') {
    selectedNumber.value = '10';
    showMsg.textContent = '9 is fully occuppied. please select another number';
  } else {
    showMsg.textContent = `You Selected ${number}`;
  }
}

// eslint-disable-next-line no-unused-vars
function hoverDiv() {
  const msgDiv = document.getElementById('msg');
  msgDiv.style.backgroundColor = '#FFFF99';
}

// eslint-disable-next-line no-unused-vars
function unhoverDiv() {
  const msgDiv = document.getElementById('msg');
  msgDiv.style.backgroundColor = '';
}
// *******************7********************
// 7.Consider an array with names of 10 programming languages, make 10 buttons by
// iterating this array, when clicked on each button the name of the programming
// language should be shown in a corresponding div.
const languages = ['Javascript', 'Python', 'C++', 'C', 'Ruby', 'php', 'Typescript', 'GoLang', 'Java', 'SQL'];

// eslint-disable-next-line no-unused-vars
function showLanguage(index) {
  const lang = document.getElementById('langToDisplay');
  if (index > 0 && index <= languages.length) {
    lang.textContent = `Selected language ${languages[index - 1]}`;
  }
}
// ******************3*********************
// 3.Create a form and submit button, on click of the button store
// your basic details from the form in the cookies.
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const key = document.getElementById('key').value;
  const { value } = document.getElementById('value');

  if (key === '' || value === '') {
    alert('please enter all feilds');
  } else {
    setCookie(key, value, 365);
  }
});
function setCookie(key, value, time) {
  const d = new Date();
  d.setTime(d.getTime() + (time * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${key}=${value};${expires};path='/'`;
}
