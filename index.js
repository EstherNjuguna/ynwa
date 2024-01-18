const datestr = document.querySelector(".date")
const date =new Date()
const year = date.getFullYear()
datestr.innerText += year
const hide = document.querySelector(".menu-icon")
const nav = document.querySelector(".nav-links")
let prompt =document.querySelector(".submit");
let forms = document.getElementById("form");
const alerts = document.querySelector(".alert")
function toggleNav() {

      nav.classList.toggle('show');
      hide.classList.toggle('show');
      
   
  };

prompt.addEventListener('click',(event)=>{ 
    event.preventDefault();
    alerts.textContent ="If it's an emergency get urgent help"
    alerts.style.color ="Red"
    alerts.style.textTransform ="uppercase"
    setTimeout(() => {
    let names = document.querySelector("#name" ).value;
    if (names ===  ""){
alert("Hello,Thank you!.")
    }
else{
    alert(`Hello  ${names} thank you`)}
    forms.reset()
}) 
})
