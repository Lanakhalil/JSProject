const Hotel = require('./Hotel');
const RoomWithView = require('./RoomWithView');
const SleepingRoom = require('./SleepingRoom');

const hotel = new Hotel("123 Main St", 10, 1, 5);

const room1 = new RoomWithView(1, "101", 100, "ocean", 2);
const room2 = new RoomWithView(2, "202", 150, "city", 3);
const room3 = new SleepingRoom(1, "102", 80, 2);
const room4 = new SleepingRoom(1, "103", 100, 3);

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);

hotel.printAdvertisement();
hotel.listAvailableRooms();
hotel.listBookedRooms();

console.log("\nBooking Rooms:");
room1.book();
room2.book();
room3.book();
room4.book();

console.log("\nListing Rooms Again:");
hotel.listAvailableRooms();
hotel.listBookedRooms();
