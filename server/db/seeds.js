use bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    "name": "Ron Swanson",
    "email": "rswanson@pawnee.gov",
    "status": "checked out"
  },
  {
    "name": "Leslie Knope",
    "email": "lknope@pawnee.gov",
    "status": "checked out"
  },
  {
    "name": "Ann Perkins",
    "email": "aperkins@pawnee.gov",
    "status": "checked out"
  }
])