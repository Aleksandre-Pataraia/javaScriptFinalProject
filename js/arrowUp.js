export function arrowUp() {
    const arrowTop = document.getElementById("arrow-click");

    if (arrowTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                arrowTop.style.setProperty("display", "flex", "important");
            } else {
                arrowTop.style.setProperty("display", "none", "important");
            }
        });

        arrowTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}