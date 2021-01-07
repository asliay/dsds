import GuestCard from "./GuestCard"


const GuestsGrid = ({guests, removeGuest}) => {
  
  const guestList = guests.map((guest) => {
    return <GuestCard guest = {guest} removeGuest={removeGuest}/>
  })

  return (
    <>
    {guestList}
    </>
  )
}

export default GuestsGrid;