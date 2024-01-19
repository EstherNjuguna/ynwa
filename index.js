
const datestr = document.querySelector(".date")
const date =new Date()
const year = date.getFullYear()
datestr.innerText += year
const hide = document.querySelector(".menu-icon")
const nav = document.querySelector(".nav-links")
let prompt =document.querySelector(".submit");
let forms = document.getElementById("form");

const slides = Array.from(document.querySelectorAll(".slide"));


const alerts = document.querySelector(".alert")
function toggleNav() {

      nav.classList.toggle('show');
      hide.classList.toggle('show');
      
   
  };

prompt.addEventListener('click',(event)=>{ 
    event.preventDefault();

    alerts.textContent ="If it's an emergency get urgent help"
    alerts.style.backgroundColor ="Red"
    alerts.style.color ="black"
    alerts.style.textTransform ="uppercase"
    alerts.style.padding ="10px"
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


    const services = document.querySelector(".services")  
    console.log(services) 
services.innerHTML= `
<p>Anxiety Handling</p>
<img src="./img/therapy.jpg">
<p>1 hour</p>
<p>Price: 1000ksh.</p>
`

//carousel
/** 
let counter = 0;
const nextSlide =()=>{
    if(counter >= slides.length-1)return;
    carousel.style.transition ='transform 0.5s ease-in-out';
    console.log('Counter before:', counter);
    counter++;
    carousel.style.transform ='translateX(' + (-counter * 100)+ '%)';

    console.log('Counter after:', counter);
}
const previousSlide =()=>{
    if(counter <=0)return;
    carousel.style.transition ='transform 0.5s ease-in-out';
    counter--;
    carousel.style.transform ='translateX(' + (-counter * 100)+ '%)'
}
carousel.addEventListener('transitionend', ()=>{
    if(slides[counter].id ==='last-clone'){
        carousel.style.transition = 'none';
        counter = slides.length -2;
        carousel.style.transform ='translateX(' + (-counter * 100)+ '%)'; 
    }
    if(slides[counter].id ==='first-clone'){
        carousel.style.transition = 'none';
        counter = slides.length -counter;
        carousel.style.transform ='translateX(' + (-counter * 100)+ '%)'; 
    }
})

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length-1].cloneNode(true)
firstClone.id ='first-clone'
lastClone.id ='last-clone'
carousel.append(firstClone)
carousel.append(lastClone)

function startCarousel(){
    setInterval(()=>{
        nextSlide();
    }, 3000)
}
startCarousel()
*/
const modal = document.getElementById('loginModal');
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButton = document.querySelector('.close');

  // Function to open the modal
  function openModal() {
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Event listeners for each open modal button
  openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      openModal();
    });
  });

  // Event listener for the close modal button
  closeModalButton.addEventListener('click', function () {
    closeModal();
  });

  // Event listener to close the modal if the user clicks outside the modal
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });