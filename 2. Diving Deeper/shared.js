let backdrop = document.querySelector('.backdrop');
let buttons = document.querySelectorAll('.button');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__action--negative');
let mobileNavBtn = document.querySelector('.mobile-nav__display-button');
let mobileNav = document.querySelector('.mobile-nav');

// console.log(backdrop);
// console.log(buttons);
// console.log(modal);
// console.log(modalClose);

buttons. forEach(addOpenClass)
function addOpenClass(button){
    button.addEventListener('click', function() {
        console.log(button);
        console.log('open');
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener ('click', function() {
    closeModal();
    mobileNav.classList.remove('open');
});

mobileNavBtn.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

function closeModal() {
    console.log('close');
    backdrop.classList.remove('open');
    
    if (modal) {
        modal.classList.remove('open');
    }
}