import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailInputEl: document.querySelector('input[name="email"]'),
  textAreaEl: document.querySelector('textarea[name="message"]'),
};
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  refs.formEl.reset();

  const formObject = {
    email: localStorage.getItem('email'),
    message: localStorage.getItem('message'),
  };
  console.log(formObject);
  localStorage.clear();
});

refs.emailInputEl.addEventListener('input', throttle(onEmailInput, 500));

refs.textAreaEl.addEventListener('input', throttle(onTextAreaInput, 500));

function onEmailInput(e) {
  localStorage.setItem('email', e.target.value);
}

function onTextAreaInput(e) {
  localStorage.setItem('message', e.target.value);
}

function addLocalValuesToFormInputs() {
  if (localStorage.getItem('email')) {
    refs.emailInputEl.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('message')) {
    refs.textAreaEl.value = localStorage.getItem('message');
  }
}

addLocalValuesToFormInputs();
