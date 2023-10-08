$("#login-btn").click(function () {
  let password1 = $("#pass1").val();
  let password2 = $("#pass2").val();

  if (password1 !== "" && password2 !== "") {
    if (password1 === password2) {
      alert("Login successfully");
    } else {
      alert("Password did not matched.");
    }
  } else {
    alert("Please enter password!");
  }
});


//slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle, hide, show, toggle
$(".anim-btn").click(function () {
//   $(".anim-text").hide(1500).show(2000);
  $(".anim-text").animate({opacity:"0.3"},1500)
});


