const button = document.querySelector(".btn-btn-primary-dropdown");
const dropdown = document.querySelector(".menu-dropdown");

button.addEventListener("click", function () {

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }

});