// Business Logic PlacesBeen
function PlacesBeen () {
  this.places = [];
  this.currentId = 0;
}

PlacesBeen.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesBeen.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

PlacesBeen.prototype.findPlace = function(id) {
  for (let i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

PlacesBeen.prototype.deletePlace = function(id) {
  for (let i=0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}
/*
placesBeen.updatePlace(1, "", "", "Spring", "")

let placesBeen = new PlacesBeen();
let place = new Places("germany", "berlin wall", "fall", "test");
let place2 = new Places("switzerland", "chocolate", "fall", "this is a peaceful place");
placesBeen.addPlace(place);
placesBeen.addPlace(place2);
*/

PlacesBeen.prototype.updatePlace = function(id, destLocation, destLandmarks, timeOfYear, destNotes) {
  for (let i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if(this.places[i].id == id) {
        if(destLocation != "") {
          this.places[i].destLocation = destLocation;
        }
        if(destLandmarks != "") {
          this.places[i].destLandmarks = destLandmarks;
        }
        if(timeOfYear != "") {
          this.places[i].timeOfYear = timeOfYear;
        }
        if(destNotes != "") {
          this.places[i].destNotes = destNotes;
        }
        return true;
      }
    }
  };
  return false;
}

// Business Logic Locations

function Places(destLocation, destLandmarks, timeOfYear, destNotes) {
  this.destLocation = destLocation;
  this.destLandmarks = destLandmarks;
  this.timeOfYear = timeOfYear;
  this.destNotes = destNotes;
}

function newPlaces(destLocation, destLandmarks, timeOfYear, destNotes) {
  let place = new Places(destLocation, destLandmarks, timeOfYear, destNotes);
  placesBeen.addPlace(place);

  let last = placesBeen.currentId

  let name = "<div class=col-3>" + destLandmarks + "</div>"
  let land = "<div class=col-3>" + destLocation + "</div>"
  let time = "<div class=col-3>" + destLocation + "</div>"
  let note = "<div class=col-3>" + destLocation + "</div>"




  let result = "<div class=row><div class=col-3></div></div>"


  return result
}
/* PlacesBeen.prototype.Places = function() {
  return this.destLocation + " " + this.destLandmarks + " " + this.timeOfYear + " " + this.destNotes;
} */
// User Interface
$(document).ready(function() {
  $("#destinationSite").submit(function() {
    event.preventDefault();
    let input1 = $("input#destinationInput").val();
    let input2 = $("input#landmarksInput").val();
    let input3 = $("timeInput").val();
    let input4 = $("notesInput").val();

    let result = newPlaces(input1, input2, input3, input4);

    $("#destinationResult").html(result);
  });
});