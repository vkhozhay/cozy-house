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