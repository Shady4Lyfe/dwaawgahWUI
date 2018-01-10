// STYLE PREVIEWER

// Add Event Listeners
$("#text").change(updateText);
$("#fontSize").change(updateFontSize);
$("#fontFamily").change(updateFontFamily);
$("#bgColor").change(updateBgColor);
$("#textColor").change(updateTextColor)
$("#bold").change(updateBold);
$("#italic").change(updateItalic);
$("input[name='align']").change(updateAlignment)


// Event Function
function updateText() {
  let newText = $("#text").val();
  $("#preview").html(newText);

}

function updateFontSize() {
  let newFontSize = $("#fontSize").val();
  $("#preview").css("font-size", newFontSize + "px");
}

function updateFontFamily() {
  let newFontFamily = $("#fontFamily").val();
  $("#preview").css("font-family", newFontFamily);
}

function updateBgColor() {
  let newBgColor = $("#bgColor").val();
  $("#preview").css("background-color", newBgColor);
}

function updateTextColor() {
  let newTextColor = $("#textColor").val();
  $("#preview").css("color", newTextColor);
}

function updateBold() {
  let checked = $("#bold").prop("checked");
  if (checked) {
    $("#preview").css("font-weight", "bold");
  } else {
    $("#preview").css("font-weight", "normal");
  }
}

function updateItalic() {
  let checked = $("#italic").prop("checked");
  if (checked) {
    $("#preview").css("font-style", "italic");
  } else {
    $("#preview").css("font-style", "normal");
  }
}

function updateAlignment()  {
  let alignValue = $("input[name='align']:checked").val();
  $("#preview").css("text-align", alignValue);
}