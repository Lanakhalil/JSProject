const Room = require('./Room');

class Hotel {
  constructor(address, numberOfRooms, minFloor, maxFloor) {
    this.address = address;
    this.numberOfRooms = numberOfRooms;
    this.#minFloor = minFloor;
    this.#maxFloor = maxFloor;
    this.rooms = [];
  }

  printAdvertisement() {
    console.log(`Welcome to ${this.address} hotel. We have ${this.numberOfRooms} rooms available for booking.`);
  }

  listBookedRooms() {
    const bookedRooms = this.rooms.filter(room => room.isBooked());
    console.log("Booked Rooms:");
    bookedRooms.forEach(room => room.printRoom());
  }

  listAvailableRooms() {
    const availableRooms = this.rooms.filter(room => !room.isBooked());
    console.log("Available Rooms:");
    availableRooms.forEach(room => room.printRoom());
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  #minFloor;
  #maxFloor;
}

module.exports = Hotel;
