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

//PlacesBeen.prototype.updatePlace = function(id, dest ) {}

// Business Logic Locations

function Places(destLocation, destLandmarks, timeOfYear, destNotes) {
  this.destLocation = destLocation;
  this.destLandmarks = destLandmarks;
  this.timeOfYear = timeOfYear;
  this.destNotes = destNotes;
}

PlacesBeen.prototype.Places = function() {
  return this.destLocation + " " + this.destLandmarks + " " + this.timeOfYear + " " + this.destNotes;
}
// User Interface