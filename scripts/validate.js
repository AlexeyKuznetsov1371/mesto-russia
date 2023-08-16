const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass);
  };
  
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(inputErrorClass);
  };

const checkInputValidity = (formElement, inputElement, submitButton, inputArray, inactiveButtonClass, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
    if (inputArray.some((input) => !input.validity.valid)) {
        submitButton.classList.add(inactiveButtonClass);
    } else {
        submitButton.classList.remove(inactiveButtonClass);
    }
  };

const setEventListeners = (formElement, submitButton, inputSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach((inputElement, index, inputArray) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, submitButton, inputArray, inactiveButtonClass, inputErrorClass, errorClass);
      });
    });
  };


function enableValidation (parametrs) {
    const formList = Array.from(document.querySelectorAll(parametrs.formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const submitButton = formElement.querySelector(parametrs.submitButtonSelector)
      setEventListeners(formElement, submitButton, parametrs.inputSelector, parametrs.inactiveButtonClass, parametrs.inputErrorClass, parametrs.errorClass);
  });
  };

  enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_invalid',
  inputErrorClass: 'popup__form-input_invalid',
  errorClass: 'popup__error'});