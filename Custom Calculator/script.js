// Add Event Listeners
$("#calc").click(calculate);

function calculate()  {
  // Input
  let num1 = Number($("#output").val());
  let num2 = Number($("#input").val());
  
  // Output
  let eff = (num1/num2) * 100
  $("#result").html(eff);
}