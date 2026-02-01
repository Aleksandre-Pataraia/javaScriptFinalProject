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
    })
}