const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const nameInput = document.getElementById("popup-input-name");
const jobInput = document.getElementById("popup-input-job");
const closePopupButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form")

editButton.addEventListener("click", function (event) {
    popup.classList.add("popup_opened");
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
});

function closePopup () {
    popup.classList.remove("popup_opened");
}

closePopupButton.addEventListener("click", closePopup); 



formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    title.textContent = nameInput.value; 
    subtitle.textContent = jobInput.value; 
    closePopup(); 
});


