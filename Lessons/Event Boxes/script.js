// EVENT BOXES

// Add Event Listeners
$("#click").click(clickEvent);
$("#dblclick").dblclick(dblClickEvent);
$("#enter").mouseenter(enterEvent);
$("#leave").mouseleave(leaveEvent);

// Event Functions
function clickEvent() {
  alert("You clikc me");
}

function dblClickEvent() {
  alert("clickm e twic")
}

function enterEvent() {
  alert("mauss");
}

function leaveEvent() {
  alert("no pls")
}