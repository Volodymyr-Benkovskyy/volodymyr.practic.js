const form = document.querySelector('#message-form');
const output = document.querySelector('#output');
const LOCALSTORAGE_KEY = 'goit-example-message';

updateOutput();

function saveMessage(evt) {
  evt.preventDefault();

  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}

form.addEventListener('submit', saveMessage);
