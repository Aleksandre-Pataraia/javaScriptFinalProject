export function localStorageUse() {
    const formElement = document.getElementById("form-validation");
    const usernameInput = document.getElementById("username-input");
    const checkBox = document.getElementById("check");

    const savedUsername = localStorage.getItem("saved_user_username");
    
    if (savedUsername) {
        usernameInput.value = savedUsername;
        checkBox.checked = true;
    }

    formElement.addEventListener("submit", function(event) {
        event.preventDefault();

        if (checkBox.checked) {
            localStorage.setItem("saved_user_username", usernameInput.value);
        } else {
            localStorage.removeItem("saved_user_username");
        }
        
        alert("მონაცემები შენახულია!");
    });
}