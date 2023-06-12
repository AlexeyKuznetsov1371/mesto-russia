const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const nameInput = document.getElementById("popup-input-name");
const jobInput = document.getElementById("popup-input-job");
const closeButton = document.querySelector(".popup__close-button");
const formButton = document.querySelector(".popup__form-button");

editButton.addEventListener("click", function (event) {
    popup.classList.add("popup__opened");
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
});

closeButton.addEventListener("click", function (event) {
    popup.classList.remove("popup__opened");
});

formButton.addEventListener("click", function (event) {
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.remove("popup__opened");
});





