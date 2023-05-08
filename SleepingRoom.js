const Room = require('./Room');

class SleepingRoom extends Room {
  constructor(floorNum, roomNum, price, personCapacity) {
    super(floorNum, roomNum, price);
    this.personCapacity = personCapacity;
  }

  #personCapacity;
}

module.exports = SleepingRoom;
