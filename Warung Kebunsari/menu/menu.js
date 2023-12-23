// navbarHumberger
const menuToggle = document.querySelector('.menu-toggle');
const ul = document.querySelector('nav ul');
const span1 = document.getElementsByTagName('span')[0];
const span2 = document.getElementsByTagName('span')[1];
const span3 = document.getElementsByTagName('span')[2];
// const stuck = document.getElementsByTagName('body')[0];
menuToggle.addEventListener('click' , function() {
    ul.classList.toggle('slide');
    span1.classList.toggle('slide');
    span2.classList.toggle('slide');
    span3.classList.toggle('slide');
    menuToggle.classList.toggle('slide');
    // stuck.classList.toggle('slide');
    bodyDropdown.classList.remove('show')
});
//dropdown-contact
const contackClick = document.querySelector('nav ul li p');
const bodyDropdown = document.querySelector('.dropdown');
contackClick.addEventListener('click' , function(e) {
    bodyDropdown.classList.toggle('show');
});

// parallax
const header = document.querySelector('header .bg');
const h1 = document.querySelector('.text h1');

window.addEventListener('scroll' , function() {
    let value = window.scrollY;
    header.style.top = value*0.5 + 'px';
    h1.style.bottom = value*2 + 'px';
});


//dom traversal  -->  close button menu
const h3 = document.querySelectorAll('h3');
const exit = document.querySelectorAll('.button');
// for(let i = 0; i < h3.length; i++){
//     h3[i].addEventListener('click', function() {
//         h3[i].nextElementSibling.classList.add('show');
//     });
// };
h3.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.nextElementSibling.classList.add('show');
        // e.target.nextElementSibling.innerHTML = '<button class="button"><span></span><span></span></button>'
    });
});
exit.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.classList.remove('show');
        e.target.parentElement.parentElement.classList.remove('show');
    });
});


//alert(comingsoon)show
const showAlert = document.querySelector('.alert')
function show_alert() {
    showAlert.classList.add('click');
  };
showAlert.addEventListener('click' , function() {
    showAlert.classList.remove('click');
});
