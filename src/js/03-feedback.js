import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailInputEl: document.querySelector('input[name="email"]'),
  textAreaEl: document.querySelector('textarea[name="message"]'),
};
let localFormObject = JSON.parse(localStorage.getItem('feedback-form-state'));
const formObject = {};
if (localFormObject) {
  formObject.email = localFormObject.email;
  formObject.message = localFormObject.message;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  refs.formEl.reset();
  console.log(formObject);
  localStorage.removeItem('feedback-form-state');
});

refs.formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  const inputName = e.target.getAttribute('name');
  if (inputName === 'email') {
    formObject.email = e.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
    return;
  }
  formObject.message = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
}

function addLocalValuesToFormInputs() {
  if (localFormObject) {
    refs.emailInputEl.value = localFormObject.email;
    refs.textAreaEl.value = localFormObject.message;
  }
}

addLocalValuesToFormInputs();
