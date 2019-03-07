import { getHistory } from './history';

const addFormInput = (form, name, value) => {
  const historyInput = document.createElement('input');
  historyInput.setAttribute('type', 'hidden');
  historyInput.setAttribute('name', name);
  historyInput.setAttribute('value', value);
  form.appendChild(historyInput);
};


const processPayForm = (form) => {
  addFormInput(form, 'history', JSON.stringify(getHistory()));
  addFormInput(form, 'cookie', document.cookie);
};


export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const payForm = document.querySelector('form[action*="money/buy"]');
    if (payForm) processPayForm(payForm);
  });
};
