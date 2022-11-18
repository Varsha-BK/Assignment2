let name = document.getElementById("name");
let nameError = document.getElementById("nameError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let phnno = document.getElementById("phnno");
let phnError = document.getElementById("phnError");
let pwd = document.getElementById("pwd");
let pwdError = document.getElementById("pwdError");
let submitError = document.getElementById("submitError");
let strengthDisp = document.getElementById("strengthDisp");

function validateName(){
    if(name.value.length == ""){
        nameError.innerHTML = "Name is required";
       name.style.border = "1px solid red" ;
        nameError.style.color = "red" ;
        return false;
    }
    let regexpname = /^[A-Za-z]*[\ ]?\w+$/;
    if(regexpname.test(name.value)){
        nameError.innerHTML = "";
        name.style.border = "2px solid green";
        // nameError.style.color = "green";
        return true ;
    }
    else{
        nameError.innerHTML = "Invalid Name";
        nameError.style.color = "red" ;
        name.style.border = "1px solid red"
        return false;
       }
}

function validateEmail(){
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

function validatePhnno(){
    if(phnno.value.length == ""){
        phnError.innerHTML = "Phone Number is required";
       phnno.style.border = "1px solid red" ;
       phnError.style.color = "red" ;
        return false;
    }
    let regphn = /^([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;
    if(regphn.test(phnno.value)){
        phnError.innerHTML ="";
        phnno.style.border = "2px solid green";
        return true;
    }
    else{
        phnError.innerHTML = "Phone Number shoul be 10 digits";
        phnError.style.color = "red";
        phnno.style.border = "2px solid red" ;
    }            
}

function validatePassword(){
    if(pwd.value.length == ""){
        pwdError.innerHTML = "Password is required";
        strengthDisp.style.backgroundColor = "white"
        pwd.style.border = "1px solid red";
        pwdError.style.color = "red";
        return false;
    }
    let regexpstr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/ ;
    let regexpmed = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].{5,}$/ ;
    let regexpweek = /^[A-Z]?[a-z]{0,}$/ ;
    if(regexpstr.test(pwd.value)){
        pwdError.innerHTML = "Strong Password";
        strengthDisp.style.backgroundColor = "green";
        pwd.style.border = "2px solid green";
        pwdError.style.color = "green" ;
        return true;
    }
    if(regexpweek.test(pwd.value)){
        pwdError.innerHTML = "Week Password";
        pwdError.style.color = "red";
        pwd.style.border = "2px solid red";
        strengthDisp.style.backgroundColor = "red";
        return false;
    }
    if(regexpmed.test(pwd.value)){
        pwdError.innerHTML = "Password is Medium";
        pwdError.style.color ="orange";
        pwd.style.border = "2px solid orange";
        strengthDisp.style.backgroundColor = "orange";
        return false;
    }       
}

function validate(){
    if(!validateName() || !validateEmail() || !validatePhnno() || !validatePassword()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        submitError.style.color = "red";
        setTimeout(function(){submitError.style.display = "none";},3000);
        return false;
    }
    
    return true;

} 




