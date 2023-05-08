const Room = require('./Room');

class RoomWithView extends Room {
  constructor(floorNum, roomNum, price, view, numberOfBeds) {
    super(floorNum, roomNum, price);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }

  #view;
  #numberOfBeds;
}

module.exports = RoomWithView;
