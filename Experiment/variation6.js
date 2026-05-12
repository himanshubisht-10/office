const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("show");
});

// SMOOTH SCROLL
const links = document.querySelectorAll(".nav-link, .dropdown-item");
const box = document.querySelector(".scroll-box");

links.forEach(link => {
  link.addEventListener("click", function(){
   

    const target = document.querySelector(this.getAttribute("href"));

    box.scrollTo({
      top: target.offsetTop - 10,
      behavior: "smooth"
    });
  });
});

// ACTIVE LINK (SCROLLSPY)
const sections = document.querySelectorAll("h4");

box.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (box.scrollTop >= section.offsetTop - 20) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});