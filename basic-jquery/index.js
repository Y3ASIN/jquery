$("h1").text("No world");
$("#p").html("<i>I have been changed</i>");
$(".append").append(" with foo");
$("#prepend").prepend("Being foo ");

let para = $("<p></p>").text("I am before you!");
$("#ab").before(para);
let para2 = $("<p></p>").text("I am after you!");
$("#ab").after(para2);

//jQuery attribute
$("a").attr("href", "https://www.studywithanis.com ");

//jQuery on css property

// $(".style").css({
//     "background": "gray",
//     "padding":"3px",
//     "color":"#fff",
// })

$(".style").addClass("style1 style2");

//using event listener with jQuery
$("button").click(function () {
  $("#singleEvent").text("Changing text using event listener in jQuery.");
  $("#singleEvent").toggleClass("toggleStyle");
});

//multiple event listener
$(".event-btn").on("mouseover",function () {
  let value = this.innerText;
  $(".multi-event").text(value + " been clicked.");
});
