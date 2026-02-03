export function validation(){
    let formEl = document.getElementById("form-validation");

    formEl.addEventListener("submit", function(event){
        event.preventDefault();
        let errors = {};
        let usernameValue = document.getElementById("username-input").value;
        if(usernameValue === ""){
            errors.username = "სახელის ველი არ შეიძლება დარჩეს ცარიელი";
        }

        let passwValue1 = document.getElementById("passw-input").value;
        if(passwValue1 === ""){
            errors.passw = "პაროლის ველი არ შეიძლება დარჩეს ცარიელი";
        }

        let passwValue2 = document.getElementById("passw-input2").value;
        if(passwValue1 !== passwValue2){
            errors.passw2 = "პაროლები არ ემთხვევა ერთმანეთს";
        }

        let checkAgree = document.getElementById("check").checked;
        if(!checkAgree){
            errors.agree = "უნდა დაეთანხმოთ ჩვენს პირობებს";
        }

        console.log(errors);

        this.querySelectorAll(".error-text").forEach((item) =>{
            item.innerHTML = " ";
        });
        for(let key in errors){
            console.log(key);

            let errorText = document.getElementById("error-" + key);
            console.log(errorText);

            if(errorText){
                errorText.innerText = errors[key];
                errorText.style.color = "red";
                errorText.style.fontStyle = "italic";
                errorText.style.fontSize = "12px";
            }
        }

        if(Object.keys(errors).length === 0){
            this.submit();
        }
    })

    let emailInput = document.getElementById("email-input");
    function emailValidation(){
        let emailValue = document.getElementById("email-input").value;
        let emailError = document.getElementById("email-error");
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(pattern.test(emailValue)){
            emailError.innerText = "თქვენი მეილი ვალიდურია";
            emailError.style.color = "green";
        }else{
            emailError.innerText = "თქვენი მეილი არ არის ვალიდური";
            emailError.style.color = "red"
        }

        if(emailValue === ""){
            emailError.innerText = "";
        }
    }

    emailInput.addEventListener("keyup", emailValidation);
    
    
}

export function showHide(){
    let passwInput = document.getElementById("passw-input");
    let icon = document.getElementById("icon");
    
    icon.addEventListener("click", function(){
        if(passwInput.type === "password"){
            passwInput.setAttribute("type", "text");
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }else{
            passwInput.setAttribute("type", "password");
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    })

    let passwInput2 = document.getElementById("passw-input2");
    let icon2 = document.getElementById("icon2");
    
    icon2.addEventListener("click", function(){
        if(passwInput2.type === "password"){
            passwInput2.setAttribute("type", "text");
            icon2.classList.remove("fa-eye");
            icon2.classList.add("fa-eye-slash");
        }else{
            passwInput2.setAttribute("type", "password");
            icon2.classList.remove("fa-eye-slash");
            icon2.classList.add("fa-eye");
        }
    })
}
