//Content
//Active Navbar
//Toggle Menu Bar for Mobiles
//Toggle Navbar Search Bar
//Toggle Navbar Cart Bar
//Toggle Navbar Login Bar



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
}


//Toggle Search Bar
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


//Toggle Cart Bar
let cartForm = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cartForm.classList.toggle('active');
}

//Toggle Login Bar
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

//
















