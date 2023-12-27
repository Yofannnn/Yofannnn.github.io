// click event btn menu
const menuIcon = document.querySelector('nav .btn .menu-icon')
menuIcon.addEventListener('click' , function(e) {
    e.target.firstElementChild.classList.toggle('show');
    e.target.lastElementChild.classList.toggle('show');
    e.target.nextElementSibling.classList.toggle('show');
    e.target.nextElementSibling.firstElementChild.classList.toggle('show');
    e.target.nextElementSibling.lastElementChild.classList.toggle('show');
});