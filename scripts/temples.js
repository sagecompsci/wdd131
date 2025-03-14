const menu = document.querySelector('.menu')
const nav = document.querySelector('.navigation')

menu.addEventListener('click', function(){
   nav.classList.toggle('open');
   menu.classList.toggle('open');
});
