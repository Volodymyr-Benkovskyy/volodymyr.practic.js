import localStorageService from './localstorage'; // import

const contactFormEl = document.querySelector('.js-contact-form');
const userDate = {};

const getValueLocalstorage = () => {
  // const userInfoFromLS = JSON.parse(localStorage.getItem('userInfo'));
  const userInfoFromLS = localStorageService.load('userInfo'); // import
  if (userInfoFromLS === undefined) {
    return;
  }
  for (const key in userInfoFromLS) {
    contactFormEl.elements[key].value = userInfoFromLS[key];
  }
};
getValueLocalstorage();

const onContactFormFielChange = event => {
  const { target: contactfieldtElement } = event;

  const contactElementValue = contactfieldtElement.value;
  const contactElementName = contactfieldtElement.name;

  userDate[contactElementName] = contactElementValue;

  //localStorage.setItem('userInfo', JSON.stringify(userDate));
  localStorageService.save('userInfo', userDate); // import
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  //localStorage.removeItem('userInfo');
  localStorageService.remove('userInfo'); // import
};

contactFormEl.addEventListener('change', onContactFormFielChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
