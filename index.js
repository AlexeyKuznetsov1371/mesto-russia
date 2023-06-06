const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const formName = document.querySelector('.popup__input_name');
const formJob = document.querySelector('.popup__input_job');
const popupEditForm = document.querySelector('.popup__container');
function edit () {
    popup.classList.add('popup__opened');
    formName.value = nameInput.textContent;
    formJob.value = jobInput.textContent;
}
editButton.addEventListener('click', edit);

const popupClose = document.querySelector('.popup__close');
function closePopup () {
    popup.classList.remove('popup__opened')
}
popupClose.addEventListener('click', closePopup);


const popupSave = document.querySelector('.popup__button');

    function savePopup(evt) {
        evt.preventDefault();
        nameInput.textContent = formName.value;
        jobInput.textContent = formJob.value;
        closePopup();
    }
    

popupSave.addEventListener('click', savePopup);




