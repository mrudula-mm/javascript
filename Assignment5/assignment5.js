// 1.Make a form with fields name, phone number, place, company
// name, pin code
// a.if any of the fields are empty on submitting it should show
// corresponding error messages below all the required fields.

// b.pin code and mobile number fields should not be submitted with
// non-integer values, if so, then show an error msg stating only numbers are allowed.

// c.The minimum length of the phone number should be 10, otherwise, show
// the corresponding error msg below the mobile no. field.
// d.On submission of the form, store the details in the local storage and
// clear the form. (it should stay on the same page don't refresh the page).

// e.Make a prepopulate button, which when clicked will populate the form
// with values in the local storage if it exists, otherwise, the button will be disabled.

// eslint-disable-next-line max-classes-per-file
function validate() {
  const username = document.getElementById('username').value;
  const phnnumber = document.getElementById('phnnumber').value;
  const place = document.getElementById('place').value;
  const companyName = document.getElementById('companyName').value;
  const pinCode = document.getElementById('pinCode').value;

  const nameError = document.getElementById('error1');
  const phnError = document.getElementById('error2');
  const placeError = document.getElementById('error3');
  const companyError = document.getElementById('error4');
  const pinError = document.getElementById('error5');

  nameError.textContent = '';
  phnError.textContent = '';
  placeError.textContent = '';
  companyError.textContent = '';
  pinError.textContent = '';

  let isValid = true;
  if (username === null || username === '') {
    nameError.textContent = 'name required';
    isValid = false;
  }
  if (phnnumber === null || phnnumber === '') {
    phnError.textContent = 'phone number required';
    isValid = false;
  } else {
    const phoneRegx = /^\d+$/;
    if (!phoneRegx.test(phnnumber)) {
      phnError.textContent = 'only numbers';
      isValid = false;
    } else if (phnnumber.length !== 10) {
      phnError.textContent = 'please enter 10 digit phone number';
      isValid = false;
    }
  }
  if (place === null || place === '') {
    placeError.textContent = 'place required';
    isValid = false;
  }
  if (companyName === null || companyName === '') {
    companyError.textContent = 'Company name required';
    isValid = false;
  }
  if (pinCode === null || pinCode === '') {
    pinError.textContent = 'pin code required';
    isValid = false;
  } else {
    const phoneRegx = /^\d+$/;
    if (!phoneRegx.test(phnnumber)) {
      pinError.textContent = 'only numbers';
      isValid = false;
    }
  }
  if (isValid) {
    localStorage.setItem('username', username);
    localStorage.setItem('phnnumber', phnnumber);
    localStorage.setItem('place', place);
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('pinCode', pinCode);
  }

  return false;
//   }
}
// **************************
function prepopulateForm() {
  const username = localStorage.getItem('username');
  const phnnumber = localStorage.getItem('phnnumber');
  const place = localStorage.getItem('place');
  const companyName = localStorage.getItem('companyName');
  const pinCode = localStorage.getItem('pinCode');

  if (username && phnnumber && place && companyName && pinCode) {
    document.getElementById('username').value = username;
    document.getElementById('phnnumber').value = phnnumber;
    document.getElementById('place').value = place;
    document.getElementById('companyName').value = companyName;
    document.getElementById('pinCode').value = pinCode;
  } else {
    // eslint-disable-next-line no-alert
    alert('No form data');
  }
}
// ********4**********
// 4.Create a static variable and console it by accessing it.
class number {
  static staticVaraible = 25;
}
const value = number.staticVaraible;
// eslint-disable-next-line no-console
console.log(`static variable:${value}`);
// ************3**************
// 3.Create a private variable and console it by accessing it.
class Private {
  #privateProperty = 'this is private';

  getPrivateProperty() {
    return this.#privateProperty;
  }
}
const myObj = new Private();
// eslint-disable-next-line no-console
console.log(myObj.getPrivateProperty());
// ************2**************
// 2.Create a button and div using JS, when clicked on the button your basic
// details should be shown in the div. The static HTML file should only
// contain the basic HTML structure, no div/buttons.
const button = document.createElement('button');
button.textContent = 'clickme';
const container = document.getElementById('container');
container.appendChild(button);
button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.textContent = 'Name: Ram, Age: 35';
  container.appendChild(div);
});
