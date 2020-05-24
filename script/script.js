const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const edit = page.querySelector('.popup');
const editClose = edit.querySelector('.popup__close');
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const formElement = page.querySelector('.popup__form');
const popupName = page.querySelector('.popup__info_name');
const popupDescript = page.querySelector('.popup__info_descript');
    


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