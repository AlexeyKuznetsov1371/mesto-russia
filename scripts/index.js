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

const editButton = document.querySelector(".profile__edit-button");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const nameInput = document.getElementById("popup-input-name");
const jobInput = document.getElementById("popup-input-job");
const closePopupButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form");
const elements = document.querySelector(".elements");
const profileAddButton = document.querySelector(".profile__add-button");
const formCardElement = document.querySelector(".popup__form.popup__form_card");
const cardNameInput = document.getElementById("popup-input-card-name");
const cardLinkInput = document.getElementById("popup-input-card-link");
const cardAddButton = document.getElementById("popup-add-card-button");

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
        document.querySelector(".popup__image-container").src = item.link;
        document.querySelector(".popup__title-image").textContent = item.name;
        openPopup(".popup_type_card-image");
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


function openPopup(selector = "") {
    const popup = document.querySelector(`.popup${selector}`);
    popup.classList.add("popup_opened");
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;

    popup.addEventListener("click", function (event) {
        if (event.target == event.currentTarget) {
            event.target.classList.remove("popup_opened");
        }
    });
};  

function handleSubmitEdit(e) {
    e.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    e.target.closest(".popup").classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleSubmitEdit);


editButton.addEventListener("click", function () {
    openPopup();
});

profileAddButton.addEventListener("click", function () {
    openPopup(".popup_type_add-cards");
});

const closePopupButtons = document.querySelectorAll(".popup__close-button");
closePopupButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.closest(".popup").classList.remove("popup_opened");
    });
});


document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelectorAll(".popup").forEach(function (element) {
        element.classList.add("popup__onload");
    });
});
