'use strict';

const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(storageKey);

if (savedData) {
  const { email, message } = JSON.parse(savedData);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

form.addEventListener('input', event => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  localStorage.setItem(storageKey, JSON.stringify({ email, message }));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(storageKey);
  form.reset();
});
