const dynamicText = document.querySelector("header h1 span");
const words = ["ELOPER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 300);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 120);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 3000);
    }
}
typeEffect();

let beforeSlide = true;
const btnHamburger = document.querySelector('nav .hamburger');
const navigationLinks = document.querySelectorAll('.navigation-page .wrapped a');
const animationDuration = 1.1;
const delayBetweenElements = 80;

btnHamburger.addEventListener('click', function() {
    if (beforeSlide) {
        toggleClass();
        navigationLinks.forEach((a, i) => {
            setTimeout(() => {
                a.style.transform = 'translateX(0px)';
                a.style.opacity = 1;
                a.style.transition = `all ${animationDuration}0${i}s`;
            }, delayBetweenElements * (navigationLinks.length + i) + animationDuration * 500);
        });
    } else {
        for (let i = navigationLinks.length - 1; i >= 0; i--) {
            const a = navigationLinks[i];
            setTimeout(() => {
                a.style.transform = 'translateX(50px)';
                a.style.opacity = 0;
                a.style.transition = `all ${animationDuration}.${i}s`;
            }, delayBetweenElements * (navigationLinks.length - i));
            
            if (i === 0) {
                setTimeout(() => {
                    toggleClass();
                }, delayBetweenElements * (navigationLinks.length - i) + animationDuration * 500);
            }
        }
    }
    beforeSlide = !beforeSlide
});

navigationLinks.forEach((a, i) => {
    a.addEventListener('click', function() {
        navigationLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = 'translateX(50px)';
                link.style.opacity = 0;
                link.style.transition = `all ${animationDuration}s`;
            }, delayBetweenElements * (navigationLinks.length - index));
        });

        setTimeout(() => {
            toggleClass();
            beforeSlide = !beforeSlide;
        }, delayBetweenElements * (navigationLinks.length - i) + animationDuration * 1000);
    });
});

function toggleClass() {
    btnHamburger.firstElementChild.classList.toggle('active')
    btnHamburger.lastElementChild.classList.toggle('active')
    btnHamburger.nextElementSibling.classList.toggle('active')
    btnHamburger.parentElement.parentElement.classList.toggle('stop')
}

const projects = [
    {"title": "Restaurant Landing Page", "desc": "Static Website, create with HTML, CSS, Javascript", "sc": "https://github.com/Yofannnn/warung-kebunsari", "ld": "https://yofannnn.github.io/warung-kebunsari/"},
    {"title": "Game Suwit Java", "desc": "Simple game suwit java crate with HTML, CSS, Javascript", "sc": "https://github.com/Yofannnn/game-suwit-jawa", "ld": "https://yofannnn.github.io/game-suwit-jawa/"},
    {"title": "IMDb API", "desc": "In this website user can search film and get information about the film,built from Bootstrap and vanilla Javascript", "sc": "https://github.com/Yofannnn/IMDb-API", "ld": "https://yofannnn.github.io/IMDb-API/"},
    {"title": "Shopping Cart", "desc": "Built from HTML, CSS, Javascript and fetch data from json then displays it, so it simulates how users can add and reduce shopping carts", "sc": "https://github.com/Yofannnn/shopping-cart", "ld": "https://yofannnn.github.io/shopping-cart/"},
    {"title": "Simple Calculator", "desc": "Simple calculator with vanilla Javascript", "sc": "https://github.com/Yofannnn/calculator-javascript", "ld": "https://yofannnn.github.io/calculator-javascript/"},
    {"title": "To-Do List App", "desc": "Simple To-Do list app built with Bootstrap and vanilla Javascript.User can create-delete-edit the task with adding deadline of the task, if the deadline is over it will show alert, and data of the task will save in local storage browser", "sc": "https://github.com/Yofannnn/To-Do-list-app", "ld": "https://yofannnn.github.io/To-Do-list-app/"},
    {"title": "Shopping List App", "desc": "Simple Shopping List app, user can create-delete-edit the list of items, user also can add price of the item and the initial money. After user checked the items that have been purchased, user will see the total price of all items and the remaining money. Built with Bootstrap,Vite and React JS", "sc": "https://github.com/Yofannnn/", "ld": "https://yofannnn.github.io/shopping-list-app/"}
]

const showCardsProject = () => {
    let cards = ""
    projects.forEach(x => {
        let {title, desc, sc, ld} = x
        cards += cardProject(title, desc, sc, ld)
        document.querySelector('.projects .content').innerHTML = cards
    })
}
showCardsProject()

const projectTitle = document.querySelector('.projects .title')
window.addEventListener('scroll', function() {
    let scroll = window.scrollY
    projectTitle.firstElementChild.style.transform = `translateX(${0 - (scroll* .9)}px)`;
    projectTitle.lastElementChild.style.transform = `translateX(${-(projectTitle.lastElementChild.offsetTop * 1.3) + (scroll* .7)}px)`;
})

document.addEventListener('DOMContentLoaded', function() {

    function handleScroll() {
        document.querySelectorAll('.about .text-wrapped p').forEach(p => {
            const rect = p.getBoundingClientRect()
            const triggerPoint = window.innerHeight * 0.75
            if (rect.top < triggerPoint && rect.bottom > 0) {
                p.style.opacity = 1;
                p.style.transform = "translateX(0px)"
            } else {
                p.style.opacity = 0;
                p.style.transform = "translateX(-20px)"
            }
        })
        document.querySelectorAll('.card').forEach(c => {
            const rect = c.getBoundingClientRect()
            const triggerPoint = window.innerHeight * 0.75
            if (rect.top < triggerPoint && rect.bottom > 0) {
                c.style.opacity = 1;
                c.style.transform = "rotate(0deg)";
                c.style.transformOrigin = 0;
            } else {
                c.style.opacity = 0;
                c.style.transform = "rotate(9deg)";
                c.style.transformOrigin = 0;
            }
        })
    }

    document.addEventListener("scroll", handleScroll);
    handleScroll();
    
})

function cardProject(title, desc, sc, ld) {
    return `<div class="card">
                <div class="card-body">
                    <div class="title-card">${title}</div>
                    <div class="desc-card">${desc}</div>
                </div>
                <hr>
                <div class="card-footer">
                    <a href="${sc}" target="_blank">Source Code</a>
                    <a href="${ld}" target="_blank">Live Demo</a>
                </div>
            </div>`
}

window.addEventListener('load', function() {
    const containerLoader = document.querySelector('.container-loader')
    containerLoader.remove()
    document.querySelector('body').classList.remove('stop')
})
