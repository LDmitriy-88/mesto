const formSelector = document.querySelector('.popup__form')
const inputSelector = document.querySelector('.popup__input')
const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileButton = profile.querySelector('.profile__button');
const edit = page.querySelector('.popup');
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const forms = page.querySelector('.popup__window');
const popupName = page.querySelector('.popup__info_name');
const popupDescript = page.querySelector('.popup__info_descript');
const addFormName = page.querySelector('.addform__name');
const addFormDescript = page.querySelector('.addform__descript');
const addForm = page.querySelector('.addform');
const addFormWindow = page.querySelector('.addform__window');
const addFormClose = addForm.querySelector('.addform__close');
const image = page.querySelector('.image');
const cards = document.querySelector('.cards');

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }];

  forms
    initialCards.forEach(function (item) {
      addCard(item.link, item.name);
    });


  function addCard(adresValue, titleValue) {

    const cardTemplate = document.querySelector('#card-template').content;
    const partCard = cardTemplate.cloneNode(true);

      partCard.querySelector('.card__photo').src = adresValue;
      partCard.querySelector('.card__title').textContent = titleValue;
      partCard.querySelector('.card__photo').alt = ("Здесь могла бы быть картинка, но что-то пошло не так... Места России. " + titleValue);

      partCard.querySelector('.card__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active');
      });

      partCard.querySelector('.card__bag').addEventListener('click', function (e) {
      e.target.parentElement.parentElement.remove();
      });

      partCard.querySelector('.card__photo').addEventListener('click', function () {
        image.querySelector('.image__big').src = adresValue ;
        image.querySelector('.image__title').textContent = titleValue;
        openWindow(image);
      });

    cards.prepend(partCard);
    
  }


  addFormWindow.addEventListener('submit', function () {
    const title = document.querySelector('.addform__name');
    const adress = document.querySelector('.addform__descript');

    addCard(adress.value, title.value);
    title.value = '';
    adress.value = '';
  });



  function openWindow(obj){
    obj.classList.remove('popup_closed');
    obj.classList.add('popup_opened');
    const window = page.querySelector('.popup_opened')
    const editClose = window.querySelector('.popup__close');
    const submit = window.querySelector('.popup__submit');
    submit.classList.add('popup__button_disabled');
    

    page.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        obj.classList.add('popup_closed');
        obj.classList.remove('popup_opened');
        page.removeEventListener();
      }
    });
  
    page.addEventListener('mousedown', function (e) {
      if (e.target === edit) {
        obj.classList.add('popup_closed');
        obj.classList.remove('popup_opened');
        page.removeEventListener();
    }

      if (e.target === addForm) {
        obj.classList.add('popup_closed');
        obj.classList.remove('popup_opened');
        page.removeEventListener();}

      if (e.target === image) {
        obj.classList.add('popup_closed');
        obj.classList.remove('popup_opened');
        page.removeEventListener();}

    });
  
    editClose.addEventListener('click', function() {
      obj.classList.add('popup_closed');
      obj.classList.remove('popup_opened');
      editClose.removeEventListener();
    });
    submit.addEventListener('click', function() {
      obj.classList.add('popup_closed');
      obj.classList.remove('popup_opened');
      submit.removeEventListener();
   });
  }

  editButton.addEventListener('click', function(){
    openWindow(edit);
    const window = page.querySelector('.popup_opened')
    const submit = window.querySelector('.popup__submit');
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    errorElement.classList.remove('popup__error_visible');
    inputSelector.classList.remove('popup__input_type_error');
    submit.classList.remove('popup__button_disabled');
    popupName.value = profileTitle.textContent;
    popupDescript.value = profileSubtitle.textContent;

  }
   );

  profileButton.addEventListener('click', function(){
    openWindow(addForm);
    addFormName.value ='';
    addFormDescript.value ='';

   }
    );

  function formSubmitHandler (evt) {

    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupDescript.value;

    popupName.value = '';
    popupDescript.value = '';
    evt.preventDefault();
    
  }

  forms.addEventListener('submit', formSubmitHandler);


  
