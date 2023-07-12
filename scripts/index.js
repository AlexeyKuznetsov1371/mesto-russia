const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_type_edit-card");
const popupAddCard = document.querySelector(".popup_type_add-cards");
const popupImage = document.querySelector(".popup_type_card-image");
const editButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__form-input-name");
const jobInput = document.querySelector(".popup__form-input-job");
const closePopupButtons = document.querySelectorAll(".popup__close-button");
const formElementEdit = document.querySelector(".popup__form_edit");
const elements = document.querySelector(".elements");
const profileAddButton = document.querySelector(".profile__add-button");
const formCardElement = document.querySelector(".popup__form_card");
const cardNameInput = document.getElementById("popup-input-card-name");
const cardLinkInput = document.getElementById("popup-input-card-link");
const cardAddButton = document.getElementById("popup-add-card-button");
const [closeEditPopup, closePopupAddCard, closePopupImage] = closePopupButtons;



function openPopup(popup) {
    popup.classList.add("popup_opened");
};


function createCard(item) {
    const templateElement = document.querySelector("#elements-cards").content.querySelector(".element");
    const cardElement = templateElement.cloneNode(true);

    const deleteButton = cardElement.querySelector(".element__delete");
    const imageElement = cardElement.querySelector(".element__image");
    const likeButton = cardElement.querySelector(".element__info-button");
    const textElement = cardElement.querySelector(".element__info-text");

    textElement.textContent = item.name;
    imageElement.src = item.link;


    likeButton.addEventListener("click", function () {
        likeButton.classList.toggle("element__info-button_active");
    });

    deleteButton.addEventListener("click", function () {
        cardElement.remove();
    });

    imageElement.addEventListener("click", function () {
        const popupImageContainer = document.querySelector(".popup__image-container");
        const popupTitleImage = document.querySelector(".popup__title-image");
        popupImageContainer.src = item.link;
        popupTitleImage.textContent = item.name;
        popupImageContainer.alt = item.name;
        openPopup(popupImage);
    });


    return cardElement;
}

function renderCard(data, container, position = "append") {
    switch (position) {
        case "append":
            container.append(createCard(data));
            break;
        case "prepend":
            container.prepend(createCard(data));
        default:
            break;
    }
}

initialCards.forEach(function (item) {
    renderCard(item, elements);
});

function handleSubmitAdd(e) {
    e.preventDefault();
    renderCard({ name: cardNameInput.value, link: cardLinkInput.value }, elements, "prepend");
    e.target.closest(".popup").classList.remove("popup_opened");
    formCardElement.reset();
}
formCardElement.addEventListener("submit", handleSubmitAdd);


//  function openPopup(selector = "") {
//      const popup = document.querySelector(`.popup${selector}`);
//      popup.classList.add("popup_opened");
//      nameInput.value = profileTitle.textContent;
//      jobInput.value = profileSubtitle.textContent;

//     popup.addEventListener("click", function (event) {
//         if (event.target == event.currentTarget) {
//             event.target.classList.remove("popup_opened");
//         }
//     });
// };  



function handleSubmitEdit(e) {
    e.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
}

formElementEdit.addEventListener("submit", handleSubmitEdit);



editButton.addEventListener("click", function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEdit);
});

profileAddButton.addEventListener("click", function () {
    openPopup(popupAddCard);
});

// const closePopupButtons = document.querySelectorAll(".popup__close-button");
// closePopupButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         button.closest(".popup").classList.remove("popup_opened");    
//     });
// });

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

closeEditPopup.addEventListener("click", () => closePopup(popupEdit));
closePopupAddCard.addEventListener("click", () => closePopup(popupAddCard));
closePopupImage.addEventListener("click", () => closePopup(popupImage));



document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelectorAll(".popup").forEach(function (element) {
        element.classList.add("popup__onload");
    });
});
