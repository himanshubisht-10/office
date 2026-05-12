const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {

     const content = this.parentElement.nextElementSibling;


    if (content.style.display =="block") {
      content.style.display ="none";   
    } else {
      content.style.display = "block";  
    }
   
  });
});