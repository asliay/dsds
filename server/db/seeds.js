use bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    "name": "Ron Swanson",
    "email": "rswanson@pawnee.gov",
    "status": false
  },
  {
    "name": "Leslie Knope",
    "email": "lknope@pawnee.gov",
    "status": false
  },
  {
    "name": "Ann Perkins",
    "email": "aperkins@pawnee.gov",
    "status": false
  }
])