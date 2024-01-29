

var username = document.forms['form']['name'];
var password = document.forms['form']['password'];


var email_error = document.getElementById('email_error');
var password_error= document.getElementById('password_error');

username.addEventListener('textInput', email_verify);
password.addEventListener('textInput', password_verify);

function validated(){
    if(username.value.length < 4){
         username.style.border = "1px solid red";
        email_error.style.display = "block";
        username.focus();
        return false;
    }
    if(password.value.length < 4){
        password.style.border = "1px solid red";
        password_error.style.display = "block";
       password.focus();
       return false;
   }
}
function email_verify(){
    if (username.value.length>=3){
        username.style.border = "1px solid silver";
        email_error.style.display = "none";
    
        return true;
    }
}
function password_verify(){
    if (password.value.length>=3 ){
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
    
        return true;
    }
}