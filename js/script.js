function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var email = document.forms["message-form"]["full-email"].value;
  var number = document.forms["message-form"]["full-number"].value;
  var message = document.forms["message-form"]["full-message"].value;
  if (name == "" || email == "" || number == "" || message == "") {
    alert("You must fill up the form!");
    return false;
  }
  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-full-email").innerText = email;
  document.getElementById("sender-full-message").innerText = message;
  return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) slideIndex = 1;
  else if (n < 1) slideIndex = x.length;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 1000);
