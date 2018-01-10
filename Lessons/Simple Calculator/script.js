// Simple Calculator

// Add event listeners
$("#num1, #num2").change(performCalc);

function performCalc()  {
  // Input: Get the two numbers 
  let num1 = Number($("#num1").val());
  let num2 = Number($("#num2").val());
  
  // Process: Perform simple addition
  let sum = num1 + num2;
  
  // Output: Set result span to the sum
  $("#result").html(sum);
  
  
  
}