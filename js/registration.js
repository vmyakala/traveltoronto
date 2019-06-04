function saveNewMember() {
    if(validate()){
        localStorage.setItem('username', document.getElementById('name').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('password', document.getElementById('password').value);
        localStorage.setItem('checkAuthorization', 0);
        alert("Your account was created successfully!");
    }else{
        localStorage.setItem('checkAuthorization', 1);
    }

}

function authorization() {
    var email = localStorage.getItem('email');
    var password =  localStorage.getItem('password');

    if (document.myFormLog.email.value === email && document.myFormLog.password.value === password){
        localStorage.setItem('checkAuthorization', 0);
    }else{
        event.preventDefault();
        if(document.myFormLog.email.value !== email){
            alert("No user with this email");
            showValidationMessage("email-message");
        }else if(document.myFormLog.password.value !== password){
            alert("Incorrect password");
            showValidationMessage("password-message");
        }
    }
}

function logout() {
    localStorage.setItem('checkAuthorization', 1);
}

function checkAuthorization() {
    var ch = localStorage.getItem('checkAuthorization');
    var url = window.location.href;
    if(url.indexOf('home.html') != -1){
        signInBlock(ch);
    }else if(url.indexOf('registration.html') != -1){
        logOutMenuLink(ch);
    }else if(url.indexOf('About.html') != -1){
        logOutMenuLink(ch);
    }else if(url.indexOf('contact.html') != -1){
        logOutMenuLink(ch);
    }else{
        if(ch == 0 ){
            logOutMenuLink(ch);
            if(url.indexOf('attractions/') != -1)
                getComments();
        }else{
            alert("You can`t see detailed information like a guest!");
            if(url.indexOf('attractions/') != -1){
                self.location = "../registration.html";
            }else{
                self.location = "registration.html";
            }
        }
    }

    document.getElementsByTagName("html")[0].style.visibility = "visible";


}

function validate()
{
    var check = true;
    if(document.myForm.name.value.length < 3)
    {
        showValidationMessage("name-message");
        check = false;
        document.myForm.name.focus() ;
        // return false;
    }else if(!document.myForm.name.checkValidity()){
        showValidationMessage("name-message");
        check = false;
    }else{
        hideValidationMessage("name-message");
    }

    if( !validateEmail())
    {
        showValidationMessage("email-message-form");
        check = false;
        document.myForm.emailForm.focus() ;
        // return false;
    }else if(!document.myForm.emailForm.checkValidity()){
        showValidationMessage("email-message-form");
        check = false;
    }else{
        hideValidationMessage("email-message-form");
    }

    if(!document.myForm.passwordForm.checkValidity()){
        showValidationMessage("password-message-form");
        check = false;
    }else{
        hideValidationMessage("password-message-form");
    }

    if( document.myForm.passwordConfirmation.value != document.myForm.password.value)
    {
        showValidationMessage("password-confirm-message");
        check = false;
        document.myForm.passwordConfirmation.focus() ;
        // return false;
    }else{
        hideValidationMessage("password-confirm-message");
    }
    return( check );
}

function validateEmail()
{
    var emailID = document.myForm.emailForm.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        document.myForm.emailForm.focus() ;
        showValidationMessage("email-message-form");
        return false;
    }else{
        hideValidationMessage("email-message-form")
    }
    return( true );
}

function showValidationMessage(elem) {
    document.getElementById(elem).removeAttribute("hidden");
    event.preventDefault();
}

function hideValidationMessage(elem) {
    document.getElementById(elem).setAttribute("hidden",true);
}
function signInBlock(ch) {
    if(ch == 0 ){
        hideValidationMessage("notMember");
        showValidationMessage("logOut");
        hideValidationMessage("signInDrop");
        document.getElementById("logOut").classList.add("d-sm-inline-block");
    }else{
        showValidationMessage("notMember");
        hideValidationMessage("logOut");
        showValidationMessage("signInDrop");
        document.getElementById("logOut").classList.remove("d-sm-inline-block");
    }
}
function  logOutMenuLink(ch) {
    if(ch == 0 ){
        hideValidationMessage("signInDrop");
        document.getElementById("logOut").classList.add("d-sm-inline-block");
    }else{
        showValidationMessage("signInDrop");
        document.getElementById("logOut").classList.remove("d-sm-inline-block");
    }
}