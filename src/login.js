const { generateText, createElement, validateInput } = require('./login.test.js');

const initApp = () => {
  // Inicializa, registra el listener de cuando se da click en el botón
  const newUserButton = document.querySelector('#login');
  newUserButton.addEventListener('click', login);
};

const login = () => {
  // Crea un componente parecido para ponerlo en el DOM
  const newUserInput = document.querySelector('input#user');
  const newPwdInput = document.querySelector('input#pwd');

  if (
    !validateInput(newUserInput.value, true, false) ||
    !validateInput(newPwdInput.value, true, false)
  ) {
    return;
  }

  const userList = document.querySelector('.user-list');
  const outputText = generateText(
    newUserInput.value,
    newPwdInput.value
  );
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Inicializa la aplicación
initApp();
