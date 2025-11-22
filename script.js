let form = document.getElementById("form");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let parolInput = document.getElementById("parol");

let infoDiv = document.querySelector("div");
let infoName = infoDiv.querySelectorAll("h2")[0];
let infoEmail = infoDiv.querySelectorAll("h2")[1];
let infoParol = infoDiv.querySelectorAll("h2")[2];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let parolValue = parolInput.value;

  infoName.textContent = "Имя: " + nameValue;
  infoEmail.textContent = "Email: " + emailValue;
  infoParol.textContent = "Пароль: " + parolValue;
});
