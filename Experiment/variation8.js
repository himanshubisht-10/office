document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll('.btn-btn-primary');
  const exampleModal = document.getElementById('exampleModal');
  const span = document.querySelector('.close-arrow');
  const button = document.querySelector('.btn-btn-secondary');
  const body = document.body;

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();   
      exampleModal.classList.toggle("show");
    });
  });

  span.addEventListener("click", (e) => {
    e.stopPropagation();
    exampleModal.classList.remove("show");
  });

  button.addEventListener("click", () => {
    exampleModal.classList.remove("show");
  });

 
  body.addEventListener("click", (e) => {
    if (!exampleModal.contains(e.target)) {
      exampleModal.classList.remove("show");
    }
  });

});