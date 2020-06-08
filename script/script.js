const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileButton = profile.querySelector('.profile__button');
const edit = page.querySelector('.popup');
const picture = page.querySelector('.image');
const editClose = edit.querySelector('.popup__close');
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const formElement = page.querySelector('.popup__form');
const popupName = page.querySelector('.popup__info_name');
const popupDescript = page.querySelector('.popup__info_descript');
const addForm = page.querySelector('.addform');
const addFormClose = addForm.querySelector('.addform__close');
const image = page.querySelector('.image');
const imageClose = image.querySelector('.image__close');
const container = document.querySelector('.container');
const addButton = document.querySelector('.addform__submit');
const cards = document.querySelector('.cards');
const card = document.querySelector('.card');

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


  initialCards.forEach(function (item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const partCard = cardTemplate.cloneNode(true);

      partCard.querySelector('.card__photo').src = item.link;
      partCard.querySelector('.card__title').textContent = item.name;

      partCard.querySelector('.card__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active');
      });

      partCard.querySelector('.card__bag').addEventListener('click', function (e) {
      e.target.parentElement.parentElement.remove();
      });

      partCard.querySelector('.card__photo').addEventListener('click', function (e) {
        image.querySelector('.image__big').src = item.link;
        image.querySelector('.image__title').textContent = item.name;
        image.classList.remove('image_closed');
        image.classList.add('image_opened');
        
        });

    cards.prepend(partCard);
  });

  function addCard(adressValue, titleValue) {

    const cardTemplate = document.querySelector('#card-template').content;
    const partCard = cardTemplate.cloneNode(true);

      partCard.querySelector('.card__photo').src = adressValue;
      partCard.querySelector('.card__title').textContent = titleValue;

      partCard.querySelector('.card__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active');
      });

      partCard.querySelector('.card__bag').addEventListener('click', function (e) {
      e.target.parentElement.parentElement.remove();
      });

      partCard.querySelector('.card__photo').addEventListener('click', function (e) {
        image.querySelector('.image__big').src = adressValue ;
        image.querySelector('.image__title').textContent = titleValue;
        image.classList.remove('image_closed');
        image.classList.add('image_opened');

      });


    cards.prepend(partCard);
    closeAddForm();
  }


  addButton.addEventListener('click', function () {
    const title = document.querySelector('.addform__info_name');
    const adress = document.querySelector('.addform__info_descript');

    addCard(adress.value, title.value);
    title.value = '';
    adress.value = '';
  });


  function editForm(){
    edit.classList.remove('popup_closed');
    edit.classList.add('popup_opened');

    popupName.value = profileTitle.textContent;
    popupDescript.value = profileSubtitle.textContent;
  }


  function closeForm(){
    edit.classList.add('popup_closed');
    edit.classList.remove('popup_opened');
  }


  function openAddForm(){
    addForm.classList.remove('addform_closed');
    addForm.classList.add('addform_opened');
  }


  function closeAddForm(){
    addForm.classList.add('addform_closed');
    addForm.classList.remove('addform_opened');
  }

  function closeImage(){
    image.classList.add('image_closed');
    image.classList.remove('image_opened');
  }

  function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupDescript.value;

    closeForm()
    popupName.value = '';
    popupDescript.value = '';
    
  }

  editButton.addEventListener('click', editForm);
  editClose.addEventListener('click', closeForm);
  formElement.addEventListener('submit', formSubmitHandler);
  profileButton.addEventListener('click', openAddForm);
  addFormClose.addEventListener('click', closeAddForm);
  imageClose.addEventListener('click', closeImage);