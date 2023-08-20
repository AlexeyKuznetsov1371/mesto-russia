import { initialCards } from "./initialCards.js";


const popupEdit = document.querySelector(".popup_type_edit-card");
const popupAddCard = document.querySelector(".popup_type_add-cards");
const popupImage = document.querySelector(".popup_type_card-image");
const editButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector("#popup-input-name");
const jobInput = document.querySelector("#popup-input-job");
const closePopupButtons = document.querySelectorAll(".popup__close-button");
const formElementEdit = document.querySelector(".popup__form_edit");
const elements = document.querySelector(".elements");
const profileAddButton = document.querySelector(".profile__add-button");
const formCardElement = document.querySelector(".popup__form_card");
const cardNameInput = document.querySelector("#popup-input-card-name");
const cardLinkInput = document.querySelector("#popup-input-card-link");
const [closeEditPopup, closePopupAddCard, closePopupImage] = closePopupButtons;
const popupImageContainer = document.querySelector(".popup__image-container");
const popupTitleImage = document.querySelector(".popup__title-image");




function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", handleKeydownPopupClose);
}

function createCard(item) {
    const templateElement = document.querySelector("#elements-cards").content.querySelector(".element");
    const cardElement = templateElement.cloneNode(true);

    const deleteButton = cardElement.querySelector(".element__delete");
    const imageElement = cardElement.querySelector(".element__image");
    const likeButton = cardElement.querySelector(".element__info-button");
    const textElement = cardElement.querySelector(".element__info-text");

    
    textElement.textContent = item.name;
    imageElement.src = item.link;
    imageElement.alt = item.name;


    likeButton.addEventListener("click", function () {
        likeButton.classList.toggle("element__info-button_active");
    });

    deleteButton.addEventListener("click", function () {
        cardElement.remove();
    });

    imageElement.addEventListener("click", function () {
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
    closePopup(popupAddCard);
    formCardElement.reset();  
}
formCardElement.addEventListener("submit", handleSubmitAdd);
  
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
    const disabledButton = popupAddCard.querySelector(".popup__form-button");
    disabledButton.setAttribute("disabled", true);
});


function handleKeydownPopupClose(evt) {
    if (evt.key === "Escape") {
      const item = document.querySelector(".popup_opened");
      closePopup(item);
    }
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", handleKeydownPopupClose);
}

function closePopupByClickiOnOverlay() {
    const popups = Array.from(document.getElementsByClassName("popup"));
    popups.forEach((item)=> {
        item.addEventListener("click", function (event) {
            if (event.target == event.currentTarget) {
                closePopup(event.target);
             }
         })
    }) 
    };
    closePopupByClickiOnOverlay();


closeEditPopup.addEventListener("click", () => closePopup(popupEdit));
closePopupAddCard.addEventListener("click", () => closePopup(popupAddCard));
closePopupImage.addEventListener("click", () => closePopup(popupImage));



