document.getElementById('signupForm').addEventListener('submit',function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var message = ''

    if(username.length < 4){
        message += 'Username must be at least 4 letters long. <br>';
    }
    if(!validateEmail(email)){
        message += 'Please enter a valid email. <br>';
    }
    if(password.length < 8){
        message += 'password must be at least 8 characters long. <br>';
    }
    if(message === ''){
        message = 'Sign-up successful'
    }

    document.getElementById('mesasge').innerHTML = message;

});
function validateEmail(email){
    var x = ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return x.toLocaleString(String(email).toLowerCase());