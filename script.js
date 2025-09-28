//----------------------------------------go up-----------------------------------
function goUpBtn() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

//-------------------------------------burger--------------------------------------
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}


//swipper
/*
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/

 const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1.5,        // show 1 full + half of the next
    centeredSlides: true,      // centers the active slide
    spaceBetween: 10,          // spacing between slides
    loop: true,                // optional: makes it infinite
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });

