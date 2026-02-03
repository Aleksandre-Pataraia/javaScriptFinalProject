export function accordion() {
    let divsArray = document.querySelectorAll('.accor-block');
    
    divsArray.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('activeAccor');
        });
    });
}