const dropdownContent = document.getElementById("myDropdown");

const button = document.querySelector(".dropbtn");
const sortIcon = document.createElement("i");
sortIcon.className = "fa-solid fa-chevron-down";

button.appendChild(sortIcon);

function toggleOptions() {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    document.querySelector(".dropbtn i").classList.remove("fa-chevron-up");
    document.querySelector(".dropbtn i").classList.add("fa-chevron-down");
  } else {
    dropdownContent.style.display = "block";
    document.querySelector(".dropbtn i").classList.remove("fa-chevron-down");
    document.querySelector(".dropbtn i").classList.add("fa-chevron-up");
  }
}

function selectOption(index) {
  var dropdownOptions = dropdownContent.getElementsByTagName("a");
  var selectedOptionText = dropdownOptions[index].innerText;
  var currentButtonText = document.querySelector(".dropbtn").innerText;
  var sortIcon = document.querySelector(".dropbtn i");

  document.querySelector(".dropbtn").innerText = selectedOptionText;
  dropdownOptions[index].innerText = currentButtonText;

  dropdownContent.style.display = "none";

  // Déplacer l'icône dans le bouton
  button.appendChild(sortIcon);

  document.querySelector(".dropbtn i").classList.remove("fa-chevron-up");
  document.querySelector(".dropbtn i").classList.add("fa-chevron-down");
}
