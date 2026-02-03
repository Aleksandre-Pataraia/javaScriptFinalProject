export function initBurger() {
    const burgerBtn = document.getElementById('burger-btn');
    const nav = document.getElementById('main-nav');

    if (burgerBtn && nav) {
        burgerBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
            
            burgerBtn.classList.toggle('toggle');
        });
    }
}
