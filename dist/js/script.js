const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});


// счетчик для индикаторов скилов
const percents = document.querySelectorAll('.use__percent-exp'),
      lines = document.querySelectorAll('.use__scale-exp span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});