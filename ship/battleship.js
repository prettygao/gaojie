var view = {
  displayMessage: function(msg) {
    var messageArea a= document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
view.displayMiss("00");
view.displayMiss("34");
view.displayMiss("55");
view.displayMiss("12");
view.displayMiss("25");
view.displayMiss("26");
view.displayMessage("Tap tap, is this thing on?");

var ship1 = {
  locations: ["10", "20", "30"],
  hits: ["", "", ""]
};