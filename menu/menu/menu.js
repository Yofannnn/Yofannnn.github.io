// navbarHumberger
const menuToggle = document.querySelector('.menu-toggle');
const ul = document.querySelector('nav ul');
const span1 = document.getElementsByTagName('span')[0];
const span2 = document.getElementsByTagName('span')[1];
const span3 = document.getElementsByTagName('span')[2];

menuToggle.addEventListener('click' , function() {
    ul.classList.toggle('slide');
    span1.classList.toggle('slide');
    span2.classList.toggle('slide');
    span3.classList.toggle('slide');
    menuToggle.classList.toggle('slide');
});



// parallax
const header = document.querySelector('header .bg');
const h1 = document.querySelector('header h1');

window.addEventListener('scroll' , function() {
    let value = window.scrollY;
    header.style.top = value*0.5 + 'px';
    h1.style.top = value*.4 + 'px';
});


//dom traversal
const h3 = document.querySelectorAll('h3');
for(let i = 0; i < h3.length; i++){
    h3[i].addEventListener('click', function() {
        h3[i].nextElementSibling.classList.add('show');
        // console.log(h3[i].nextElementSibling);
    });
};

const exit = document.querySelectorAll('.contain .close');
for(let i = 0; i < exit.length; i++){
    exit[i].addEventListener('click', function() {
        exit[i].previousElementSibling.classList.remove('show');
        console.log(exit[i].nextElementSibling);
        // alert('test ' + i)
    });
};