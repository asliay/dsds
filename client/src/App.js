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

  return (
    <>
      <h1>Pawnee Hotel</h1>
      <GuestsForm addGuest={addGuest}/>
      <GuestsGrid guests = {guests}/>

    </>
  );
}

export default App;
