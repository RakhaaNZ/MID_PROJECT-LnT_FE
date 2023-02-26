//preload
$(window).on('load', function(){
    $(".loadPage").fadeTo(2000,1).fadeOut(2000);
    $(".container").fadeIn(4000);
})

// Navbar
const navbar = document.getElementById('navbar');
let prevYpos = 0; // nilai awal

window.onscroll = function(){
    const Ypos = window.scrollY;
    if(Ypos > prevYpos){
        navbar.style.top = navbar.offsetHeight * -1 + 'px';
    }else{
        navbar.style.top = '0px'
    }
    prevYpos = Ypos;
}

//Validation
function validateForm() {
    if (document.forms["form"]["name", "email", "subject", "message"].value == "") {
        alert("Form cannot be empty");
        document.forms["form"]["name", "email", "subject", "message"].focus();
        return false;
    }
}

const rules = {
    name: {
        required: true,
        minlength: 3
    },
    email: {
        required: true,
        email: true
    },
    message: "required"
}

const message = {
    name: {
        required: "Please input your name",
        minlength: "Your name must consist of at lease 3 characters"
    },
    email: {
        required: "Please input your email",
        email: "Please input a valid email addres with ''@''"
    },
    message: "Please enter your message"
}

$(document).ready(function() {
    $('form').validate({
        rules: rules,
        messages: message
    })
})

//button login&signin
window.onload = function() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("user").style.display = "flex";
    }
  }

function login() {
    sessionStorage.setItem("isLoggedIn", "true");
}