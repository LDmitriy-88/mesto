const popupElement = page.querySelector('.popup__form');

const showInputError = (popupElement, popupInput, errorMessage) => {
    const errorElement = popupElement.querySelector(`#${popupInput.id}-error`);
    popupInput.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  
const hideInputError = (popupElement, popupInput) => {
    const errorElement = popupElement.querySelector(`#${popupInput.id}-error`);
    popupInput.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };
  
const checkInputValidity = (popupElement, popupInput) => {
    if (!popupInput.validity.valid) {
      showInputError(popupElement, popupInput, popupInput.validationMessage);
    } else {
      hideInputError(popupElement, popupInput);
    }
  };
  
const hasInvalidInput = (inputList) => {
    return inputList.some((popupInput) => {
      return !popupInput.validity.valid;
    });
  };
  
const toggleButtonState = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_inactive');
    } else {
      buttonElement.classList.remove('popup__button_inactive');
    }
  };
  
const setEventListeners = (popupElement) => {
    const inputList = Array.from(popupElement.querySelectorAll('.popup__input'));
    const buttonElement = popupElement.querySelector('.popup__submit');
  
    toggleButtonState(inputList, buttonElement);
  
inputList.forEach((popupInput) => {
    popupInput.addEventListener('input', function () {
        checkInputValidity(popupElement, popupInput);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((popupElement) => {
        popupElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(popupElement.querySelectorAll('.popup__formset'));
  
      fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    });
  };
  
  enableValidation();




  
 