var link = document.querySelector(".button-writeus");

var popup = document.querySelector(".modal-writeus");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("username");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  username.classList.remove("feedback-username-error");
  email.classList.remove("feedback-email-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value && !email.value) {
    evt.preventDefault();
    username.classList.add("feedback-username-error");
    email.classList.add("feedback-email-error");
  } else {
    localStorage.setItem("username", username.value);
  }
});

form.addEventListener("submit", function (evt) {
  if (username.value && !email.value) {
    evt.preventDefault();
    email.classList.add("feedback-email-error");
  } else {
    localStorage.setItem("username", username.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      username.classList.remove("feedback-username-error");
      email.classList.remove("feedback-email-error");
    }
  }
});