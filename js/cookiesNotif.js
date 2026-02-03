export function cookiesNotif(){
    document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        setTimeout(() => {
            cookieBanner.classList.add("active");
        }, 1000);
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.classList.remove("active");
    });
});
}