const button = document.querySelector(".primary-btn");
const container = document.querySelector(".container");
button.addEventListener("click",function(){

  const alertBox = document.createElement("div");
  alertBox.classList.add("text");
  alertBox.innerHTML = `
        <p>this is  a new line</p>
        <div class="delete-btn">
          <button class="secondary-btn">Delete

          </button>
        </div>
    
      `;
       alertBox.style.display = "flex";
        container.appendChild(alertBox);

  const delBtn = alertBox.querySelector(".secondary-btn");

  delBtn.addEventListener("click", function () {
    alertBox.remove();
    
    


});
//  setTimeout (function(){
//      alertBox.remove();

//  },50000);
});