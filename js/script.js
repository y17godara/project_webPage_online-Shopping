//Content

/* Header Section */
//Active Navbar
//Toggle Menu Bar for Mobiles
//Toggle Navbar Search Bar
//Toggle Navbar Cart Bar
//Toggle Navbar Login Bar
//On Window Scroll Navbar Icon hide

/* Products Section */
//Slider Swiper.JS


/* Header Section*/


// Add active class to the current button (highlight it)
let header = document.getElementById("yashDiv");
let btns = header.getElementsByClassName("yashBtn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Toggle Menu Bar for Mobiles
let menuForm = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    menuForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cartForm.classList.remove('active');
    loginForm.classList.remove('active');
}


//Toggle Search Bar
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    menuForm.classList.remove('active');
    cartForm.classList.remove('active');
    loginForm.classList.remove('active');
}


//Toggle Cart Bar
let cartForm = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cartForm.classList.toggle('active');
    menuForm.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

//Toggle Login Bar
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    menuForm.classList.remove('active');
    searchForm.classList.remove('active');
    cartForm.classList.remove('active');
}

//On Window Scroll Navbar Icon hide
window.scroll = () => {
    menuForm.classList.remove('active');
    searchForm.classList.remove('active');
    cartForm.classList.remove('active');
    loginForm.classList.remove('active');
}



/* Products Section */
//Slider Swiper.JS
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});









