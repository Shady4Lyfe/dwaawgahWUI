// NIM LESSON 

// Global Variables
let fillColor = "blue";

// Add Event Listeners
$("#blueBtn").click(setBlue);
$("#redBtn").click(setRed);
$("div").click(selectDiv);
$("#reset").click(reset);

// Event Functions
function setBlue() {
  fillColor = "blue"
  $("#blueBtn").addClass("active");
  $("#redBtn").removeClass("active");
}

function setRed() {
  fillColor = "red"
  $("#redBtn").addClass("active");
  $("#blueBtn").removeClass("active");
}

function selectDiv() {
  if (!$(this).hasClass("active")) {
    $(this).addClass(fillColor + " active");
  }
}

function reset() {
  $("div").removeClass("blue red active");
}
