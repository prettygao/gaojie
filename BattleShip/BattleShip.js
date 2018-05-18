var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("meassageArea");
    messageArea.innerHTML = msg;
},
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
},
  displayMiss: function (location) {
}
}
view.displayMiss("00"); 
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
var ship = {
  location: ["10", "20", "30"],
  hits: ["", "", ""]
};
var ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
{ locations: ["32", "33", "34"], hits: ["", "", ""] },
{ locations: ["63", "64", "64"], hits: ["", "", ""] }
];
var model = {
  boardSize: 7,
  numShip: 3,
  shipSunk: 0,
  shipLength: 3,
  ship: [{ locations: ["06", "16", 26], hits: ["", "", ""] },
  { locations: ["24", "34", "44"], hits: ["", "", ""] },
  { locations: ["10", "11", "12"], hits: ["", "", ""] }],
  fire: function (guess) {
    for (var i = 0; i < this.numShip; i++) {
      var ship = this.ships[i];
      var location = ship.locations;
    var index = locations.indexOf(guess);
    if (index >= 0){
      ship.hits[index]= "hit";
      view.displayHit(guess);
      view.displayMessage("HIT!");
      if (this.isSunk(ship)){
        view.displayMessage("You sank my battleship!")
        this.shipSunk++;
      }
      return true;
    }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed."); 
    return false;
  },
  isSunk: function(ship){
    for (var i=0; i < this.shipLength; i++){ 
      if (ship.hits[i] !== "hit"){
        return false;
      }
    }
    return true;
  }
}