var elForm = document.querySelector(".temperatura");
var elTemperaturaInput = elForm.querySelector(".temperatura-input");
var elRainCheckbox = elForm.querySelector(".rain-checkbox");
var elFetnesCheckbox = elForm.querySelector(".fetnes-checkbox");
var elReold = document.querySelector(".reold-alert");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var temperaturaInput = parseFloat(elTemperaturaInput.value.trim());

  if(temperaturaInput === "" || isNaN(temperaturaInput)) {
    alert("Brat bu yerga son kiritish kerak edida :)");
    elTemperaturaInput.value = "";
    return;
  }

  if(temperaturaInput >= 15 && temperaturaInput <= 30 && elFetnesCheckbox.checked) {
    elReold.classList.remove("d-none", "alert-success", "alert-danger");
    elReold.classList.add("alert-success");

    elReold.textContent = "Boramiz Katta og'a :)";
  }
  else {
    elReold.classList.remove("d-none", "alert-success", "alert-danger");
    elReold.classList.add("alert-danger");

    elReold.textContent = "Uzur katta og'a Borolmaymiz kasal bo'lib qolasiz :("
  }


})






