
 const slides = document.querySelectorAll(".carousel-item");
 const prev = document.querySelector(".carousel-control-prev");
 const next = document.querySelector(".carousel-control-next");

 let i = 0;

//function: ek slide dikhao
 function show() {
   slides.forEach(s => s.classList.remove("active"));
   slides[i].classList.add("active");
 }

// next button
 next.onclick = () => {
   i = (i + 1) % slides.length;
   show();
 };

 //prev button
 prev.onclick = () => {
   i = (i - 1 + slides.length) % slides.length;
   show();
 };