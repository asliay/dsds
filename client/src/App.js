import {useState, useEffect} from 'react';
import GuestsGrid from "./GuestsGrid"
import GuestsForm from "./GuestsForm"
import {getGuests} from "./GuestService"
import './App.css';

function App() {

    const [guests, setGuests] = useState([]);

    useEffect(() => {
      getGuests().then((allGuests) => {
        setGuests(allGuests);
      })
    }, []);

    const addGuest = (guest) => {
      const temp = guests.map(guest => guest);
      temp.push(guest);
      setGuests(temp);
    }

    const removeGuest = (id) => {
      const temp = guests.map(guest => guest);
      const indexToDelete = temp.map(guest => guest._id).indexOf(id);

      temp.splice(indexToDelete, 1);
      setGuests(temp);
    }

  return (
    <>
      <h1>Pawnee Hotel</h1>
      <GuestsForm addGuest={addGuest}/>
      <GuestsGrid guests = {guests} removeGuest={removeGuest}/>

    </>
  );
}

export default App;
