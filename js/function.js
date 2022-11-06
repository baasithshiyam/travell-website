

$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


setTimeout(function() {
  $('body')
    .removeClass('loading')
    .addClass('loaded');
}, 3000);
