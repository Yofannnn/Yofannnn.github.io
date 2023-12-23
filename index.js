// btn navbar
const btn = document.querySelector("nav .btn");
const span1 = document.querySelectorAll("nav .btn .menu-icon span")[0];
const span2 = document.querySelectorAll("nav .btn .menu-icon span")[1];
const containerNavbar = document.querySelector("nav .btn .container");

btn.addEventListener('click' , function(e) {
    // console.log(e.target);
    // e.target.firstElementChild.classList.toggle('show');
    // e.target.lastElementChild.classList.toggle('show');
    // e.target.classList.toggle('show');
    // e.target.classList.toggle('show');
    span1.classList.toggle('show');
    span2.classList.toggle('show');
    containerNavbar.classList.toggle('show');
});