class Room {
    constructor(floorNum, roomNum, price) {
      this.floorNum = floorNum;
      this.roomNum = roomNum;
      this.price = price;
      this.#isBooked = false;
    }
  
    printRoom() {
      console.log(`Floor: ${this.floorNum}, Room Number: ${this.roomNum}, Price: ${this.price}, Booked: ${this.#isBooked}`);
    }
  
    book() {
      if (this.#isBooked) {
        console.log("Sorry, room is already booked!");
      } else {
        this.#isBooked = true;
        console.log("Room booked successfully!");
      }
    }
  
    isBooked() {
      return this.#isBooked;
    }
  
    #isBooked;
  }
  
  module.exports = Room;
  