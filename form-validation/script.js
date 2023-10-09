$(document).ready(function () {
  //function that validate the form
  $("form").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let error = false;

    if (name.trim() === "") {
      showError("name", "Name is required.");
      error = true;
    }
    if (email.trim() === "") {
      showError("email", "Email is required.");
      error = true;
    }
    if (address.trim() === "") {
      showError("address", "Address is required.");
      error = true;
    }
    if (phone.trim() === "") {
      showError("phone", "Phone is required.");
      error = true;
    }
    if (password.trim().length <= 8) {
      showError("password", "Password must be at least 8 characters");
      error = true;
    }
    //there are no errors then submit the form
    if (!error) {
      $("form")[0].submit();
    }
  });
  //function that show the error message
  function showError(field, message) {
    $(`#${field}-error`).remove();
    $(`#${field}`).after(
      `<div id="${field}-error" class="error" >${message}</div>`
    );
  }
});
