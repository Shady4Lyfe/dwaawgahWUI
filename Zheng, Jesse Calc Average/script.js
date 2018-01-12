// Add Event Listeners
$("#calc").click(calculate);

function calculate() {
  // Input
  let num1 = Number($("#test1").val());
  let num2 = Number($("#test2").val());
  let num3 = Number($("#test3").val());

  // Process
  let avg = Math.round(((num1 + num2 + num3) / 3) * 100) / 100;
  $("#result").html(avg);

  // Output
  if (avg <= 50) {
    $("div").css("background-color", "red");
    $("#feedback").text("Poor");
  }

  if (avg <= 64 && avg >= 50) {
    $("div").css("background-color", "orange");
    $("#feedback").text("Adequate");
  }

  if (avg <= 80 && avg >= 65) {
    $("div").css("background-color", "yellow");
    $("#feedback").text("Good");
  }

  if (avg >= 80) {
    $("div").css("background-color", "green");
    $("#feedback").text("Great");
  }
}
