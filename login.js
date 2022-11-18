let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let pwd = document.getElementById("pwd");
let pwdError = document.getElementById("pwdError");
let loginError = document.getElementById("loginError");
let strength = document.getElementById("strength");


function validateLoginEmail(){
    if(email.value.length == ""){
        emailError.innerHTML = "Email is required";
       email.style.border = "1px solid red" ;
       emailError.style.color = "red" ;
        return false;
    }

    let regexpemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(regexpemail.test(email.value)){
        emailError.innerHTML = "";
        email.style.border = "2px solid green";
        return true;
    }
    else{
        emailError.innerHTML ="Invalid Email";
        emailError.style.color= "red" ;
        email.style.border = "2px solid red"
        return false;
    }
}

function validateLoginPassword(){
    if(pwd.value.length == ""){
        pwdError.innerHTML = "Password is required";
        strength.style.backgroundColor = "white"
        pwd.style.border = "1px solid red";
        pwdError.style.color = "red";
        return false;
    }
    let regexpstr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/ ;
    let regexpmed = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].{5,}$/ ;
    let regexpweek = /^[A-Z]?[a-z]{0,}$/ ;
    if(regexpstr.test(pwd.value)){
        pwdError.innerHTML = "Strong Password";
        strength.style.backgroundColor = "green";
        pwd.style.border = "2px solid green";
        pwdError.style.color = "green" ;
        return true;
    }
    if(regexpweek.test(pwd.value)){
        pwdError.innerHTML = "Week Password";
        pwdError.style.color = "red";
        pwd.style.border = "2px solid red";
        strength.style.backgroundColor = "red";
        return false;
    }
    if(regexpmed.test(pwd.value)){
        pwdError.innerHTML = "Password is Medium";
        pwdError.style.color ="orange";
        pwd.style.border = "2px solid orange";
        strength.style.backgroundColor = "orange";
        return false;
    }
    // return true;
}

function validateLogin(){
    if(!validateLoginEmail() || !validateLoginPassword()){
        loginError.style.display = "block";
        loginError.innerHTML = "Please fix error to submit";
        loginError.style.color = "red";
        setTimeout(function(){loginError.style.display = "none";},3000);
        return false;
    }
    
    // return true;

} 


