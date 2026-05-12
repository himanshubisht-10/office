document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.querySelector('button.btn-btn-primary');
  const openLink = document.querySelector('a.btn-btn-primary');
  const offcanvas = document.getElementById('offcanvasExample'); 
  const closeBtn = document.querySelector('.btn-close');
  const container = document.querySelector('.container');

  openBtn.addEventListener("click", (e) => {
      e.stopPropagation();
    offcanvas.classList.toggle("show");
  });

  openLink.addEventListener("click", (e) => {
    e.preventDefault();
      e.stopPropagation();
    offcanvas.classList.toggle("show");
  });

  closeBtn.addEventListener("click", () => {
    offcanvas.classList.remove("show");
  });

  container.addEventListener("click", (e) => {
    if (!offcanvas.contains(e.target)) {
      offcanvas.classList.remove("show");
    }
  });
  



});const dropdownBtn = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener("click", () => {
//   dropdownMenu.style.display =
//     dropdownMenu.style.display === "block" ? "none" : "block";
dropdownMenu.classList.toggle('show');
});
