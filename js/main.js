 let navButtonWrapper = document.querySelector('#navigation-mobile__icon-wrapper');
 let navButton = document.querySelector('#navigation-mobile__icon');
 let mobileNavigation = document.querySelector('#navigation-mobile');
 let sectionArr = document.querySelectorAll('section');



 navButtonWrapper.onclick = function () {

     navButton.classList.toggle('navigation-mobile__icon-active');
     mobileNavigation.classList.toggle('navigation-mobile_active');

     for (i = 0; i < sectionArr.length; i++) {
         sectionArr[i].classList.toggle('section__menu-active');
     }

 }


 var swiper = new Swiper('.swiper-container', {
     slidesPerView: 3,
     spaceBetween: 50,
     slidesPerGroup: 1,
     loop: true,

     navigation: {
         nextEl: '.slider-button-next',
         prevEl: '.slider-button-prev',
     },

     breakpoints: {
         // when window width is >= 320px
         320: {
             slidesPerView: 1
         },
         // when window width is >= 640px
         640: {
             slidesPerView: 2,
             spaceBetween: 30
         },
         // when window width is >= 900px
         900: {
             slidesPerView: 3,
             spaceBetween: 50
         },
     },
     pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
     }
 });