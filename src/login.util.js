exports.generateText = (user, pwd) => {
    // Regresa el texto
    return `${user} ${pwd}`;
  };
  
  exports.createElement = (type, text, className) => {
    // Crea nuevos elementos y los regresa
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
  };
  
  exports.validateInput = (text, notEmpty, isNumber) => {
    // Valida el usuario con 2 reglas predefinidas
    if (!text) {
      return false;
    }
    if (notEmpty && text.trim().length === 0) {
      return false;
    }
    if (isNumber && +text === NaN) {
      return false;
    }
    return true;
  };