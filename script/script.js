let page = document.querySelector('.page');
let profile = page.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let edit = page.querySelector('.popup');
let editClose = edit.querySelector('.popup__close');
let profileTitle = page.querySelector('.profile__title');
let profileSubtitle = page.querySelector('.profile__subtitle');
let formElement = page.querySelector('.popup__submit');

function editForm(){
    edit.classList.remove('popup');
    edit.classList.add('popup_opened');

    let popupName = page.querySelector('.name');
    let popupDescript = page.querySelector('.descript');
    

    popupName.value = profileTitle.textContent;
    popupDescript.value = profileSubtitle.textContent;
}

function closeForm(){
    edit.classList.add('popup');
    edit.classList.remove('popup_opened');
    }

editButton.addEventListener('click', editForm);
editClose.addEventListener('click', closeForm);

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameInput = page.querySelector('.name');
    let jobInput = page.querySelector('.descript');

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    nameInput.value = '';
    jobInput.value = '';

}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('click', formSubmitHandler);
formElement.addEventListener('click', closeForm);