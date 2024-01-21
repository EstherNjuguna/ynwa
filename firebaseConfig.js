// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.esm.js';
  import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.esm.js';

const firebaseConfig = {
    apiKey: "AIzaSyBZKPmbAW5USn3l8x-cEtuwIF50CCFSgXQ",
    authDomain: "yana-d63b5.firebaseapp.com",
    projectId: "yana-d63b5",
    storageBucket: "yana-d63b5.appspot.com",
    messagingSenderId: "545451701439",
    appId: "1:545451701439:web:501c16665132ce53b8420a",
    measurementId: "G-NSP85GLCFJ"
  };
  const app = initializeApp(firebaseConfig);

let auth = getAuth();
let email =document.querySelector("#email")
let password =document.querySelector("#password")
let submit =document.querySelector("#button")
let names =document.querySelector("#name")


const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  
  submit.addEventListener("click", handleSubmit);
  
