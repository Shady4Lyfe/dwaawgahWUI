// Add Event Listener
$("#guyCol").change(changeGuyCol);

// Event Functions
function changeGuyCol() {
    player1.col = $("#guyCol").val();
}