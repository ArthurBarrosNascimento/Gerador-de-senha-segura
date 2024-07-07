import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordElement = document.querySelector('#generateRadomPassawordButton');
const displayPasswordElement = document.querySelector('h2');
const copyButton = document.querySelector('#copyButton');

passwordElement.addEventListener('click', () => {
  const radomPassword = nanoid();
  displayPasswordElement.innerHTML = radomPassword;
});

copyButton.addEventListener('click', () => {
  const text = displayPasswordElement.textContent;
  copy(text);
  // eslint-disable-next-line no-alert
  window.alert('Senha copiada com sucesso');
});
