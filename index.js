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
const contackClick = document.getElementsByTagName('li')[3];
const bodyDropdown = document.querySelector('.dropdown');
contackClick.addEventListener('click' , function(e) {
    bodyDropdown.classList.toggle('show');
    e.preventDefault();
});

//parallax
const bg= document.querySelector('.bg');
const bgImg= document.querySelector('.bgimg');
// const nav = document.querySelector('nav');
window.addEventListener('scroll' , function() {
    let value = window.scrollY;
    bgImg.style.bottom = value*.4 + 'px';
    bg.style.top = value*0.6 + 'px';
    // nav.style.top = value*.8 + 'px';
    // parallaxLandingElement
});

// first open page - can use display a promo when user open this page
// const banner = document.querySelector('.firstOpen');
// window.addEventListener('click' , function() {
//     banner.classList.add('delete');
// });

//alert(comingsoon)show
const showAlert = document.querySelector('.alert')
function show_alert() {
    showAlert.classList.add('click');
  };
showAlert.addEventListener('click' , function() {
    showAlert.classList.remove('click');
});