const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const nameInput = document.getElementById("popup-input-name");
const jobInput = document.getElementById("popup-input-job");
const closePopupButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form");
// 5 спринт
const elements =document.querySelector('.elements');
const templateElement = document.querySelector('#elements-cards').content.querySelector('.element');
const deleteButton = document.querySelector('.element__delete');
const imageElement = document.querySelector('.element__image');
const likeButton = document.querySelector('.element__info-button');
const textElement = document.querySelector('.element__info-text'); 







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
    }
  ];

// editButton.addEventListener("click", function (e) {
//     popup.classList.add("popup_opened");
//     nameInput.value = title.textContent;
//     jobInput.value = subtitle.textContent;
// });

function openPopup () {
    popup.classList.add("popup_opened");
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
};

editButton.addEventListener("click", openPopup);

function closePopup () {
    popup.classList.remove("popup_opened");
};

closePopupButton.addEventListener("click", closePopup); 


formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    title.textContent = nameInput.value; 
    subtitle.textContent = jobInput.value; 
    closePopup(); 
});


