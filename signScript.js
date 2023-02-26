//preload
$(window).on('load', function(){
    $(".loadPage").fadeTo(1500,1).fadeOut(1500);
    $(".container").fadeIn(3000);
})

//validate signin
function validateLog() {
    if (document.forms["form"]["username", "email", "password"].value == "") {
        alert("Form cannot be empty");
        document.forms["form"]["username", "email", "password"].focus();
        return false;
    }
}

function validate() {
    if (document.forms["form"]["username"].value.length >= 5 && document.forms["form"]["password"].value.length >= 5) {
        window.location.href = 'index.html';
        return false;
    }
}

const rules = {
    username: {
        required: true,
        minlength: 5
    },
    email: {
        required: true,
        email: true
    },
    password: {
        required: true,
        minlength: 5,
    }
}

const message = {
    username: {
        required: "Please input your username",
        minlength: "Your name must consist of at lease 5 char"
    },
    email: {
        required: "Please input your email",
        email: "Please input a valid email addres with ''@''"
    },
    password: {
        required: "Please input your password",
        minlength: "Your password weak"
    }
}

$(document).ready(function() {
    $('form').validate({
        rules: rules,
        messages: message
    })
})