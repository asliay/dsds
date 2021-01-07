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

  return (
    <>
      <h1>Pawnee Hotel</h1>
      <GuestsForm />
      <GuestsGrid />

    </>
  );
}

export default App;
