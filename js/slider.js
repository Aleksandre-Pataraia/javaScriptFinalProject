
export function initSlider() {
    const track = document.getElementById('sliderTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (!track || !nextBtn || !prevBtn) return;

    let index = 0;

    nextBtn.addEventListener('click', () => {
        const items = track.children.length;
        index = (index < items - 1) ? index + 1 : 0;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        const items = track.children.length;
        index = (index > 0) ? index - 1 : items - 1;
        updateSlider();
    });

    function updateSlider() {
        const width = track.parentElement.clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    window.addEventListener('resize', updateSlider);
}