/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{delay: 200}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__subtitle',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about-title',{delay: 200}); 
sr.reveal('.skills__data',{delay: 200}); 
sr.reveal('.skills__text',{delay: 200}); 

/*SCROLL Projects*/
sr.reveal('.project_card',{delay: 100}); 
sr.reveal('.button_project',{delay: 100}); 
/*SCROLL WORK*/
sr.reveal('.work__title',{interval: 200}); 
sr.reveal('.wrapper',{interval: 300}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_title',{interval: 200});
sr.reveal('.contact_form_text',{interval: 300});
sr.reveal('.button_c',{interval: 350});

//typing animation
var typed = new Typed(".typing", {
    strings: ["Programmer.", "Python Lover.", "Future CS major.", "Student Fellow.", "Machine Learning Enthusiast."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var pageX = $(document).width();
var pageY = $(document).height();
var mouseY = 0;
var mouseX = 0;

$(document).mousemove(function (event) {
  //verticalAxis
  mouseY = event.pageY;
  yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
  //horizontalAxis
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  $(".box__ghost-eyes").css({
    transform: "translate(" + xAxis + "%,-" + yAxis + "%)"
  });

  console.log("X: " + xAxis);
});

