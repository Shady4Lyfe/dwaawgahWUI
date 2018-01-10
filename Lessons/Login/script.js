// LOGIN

// Add Event Listeners
$("#submit").click(submitEvent);

// Event Function
function submitEvent()  {
  let username = $("#username").val();
  let password = $("#password").val();
  let $result = $("#result");
  
  if (username == "admin" && password == "1234")  {
    $result.html("Login succ");
  } else {
    $result.html("Login nosucc");
  }
}

