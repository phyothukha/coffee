let navbar=document.querySelector('.navbar');
let hamburger=document.querySelector(".hamburger");
let search=document.querySelector("#search-btn");
let searchForm=document.querySelector(".search-form")
let cartItemContainer=document.querySelector('.cart-item-container');
let cart=document.querySelector("#cart-btn")

// console.dir(navbar);
    search.addEventListener('click',_=> searchForm.classList.toggle('active'))
    cart.addEventListener('click',_=>cartItemContainer.classList.toggle('active'))
    hamburger.addEventListener('click',_=>navbar.classList.toggle('active'))