const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message; 
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function emailValidation(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkEmail(){
    if(email.value == ""){
        showError(email, "Email is required");
    }
    else if(!emailValidation(email.value)){
        showError(email, "Email is not valid");
    }
    else{
        showSuccess(email);
    }
}

function checkUsername(){
    if(username.value == ""){
        showError(username, "Username is required");
    }
    else{
        showSuccess(username);
    }
}
function checkPassword(){
    if(password.value == ""){
        showError(password, "Password is required");
    }
    else{
        showSuccess(password);
    }
}
function checkConfirmPassword(){
    if(password2.value == ""){
        showError(password2, "Please confirm the password");
    }
    else{
        showSuccess(password2);
    }
}
function checkPasswordMatch(password, password2){
    if(password.value !== password2.value){
        showError(password2, "Passwords do not match");
    }
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    checkEmail();
    checkUsername();
    checkPassword();
    checkConfirmPassword();
    checkPasswordMatch(password, password2);
});
