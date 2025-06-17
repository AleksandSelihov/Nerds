const btn = document.querySelector('.map__link');
const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--active')
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--active')
})