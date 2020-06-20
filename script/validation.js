
config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}


const showInputError = (formSelector, inputSelector, errorMessage) => {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
  };
  
const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
  };
  
const checkInputValidity = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid) {
      showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } 
    else {
      hideInputError(formSelector, inputSelector);
    }
  };
  
const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
    });
  };
  
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_disabled');
    } 
    else {
      buttonElement.classList.remove('popup__button_disabled');
    }
  };
  
const setEventListeners = (formSelector) => {
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const buttonElement = formSelector.querySelector('.popup__submit');
    toggleButtonState(inputList, buttonElement);
  
inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
        checkInputValidity(formSelector, inputSelector);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
function enableValidation(obj){
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((obj) => {
      obj.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(obj.querySelectorAll('.popup__formset'));
  
      fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    });
  };
  
enableValidation(config.formSelector);

 