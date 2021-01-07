import GuestCard from "./GuestCard"


const GuestsGrid = ({guests}) => {
  
  const guestList = guests.map((guest) => {
    return <GuestCard guest = {guest}/>
  })

  return (
    <>
    {guestList}
    </>
  )
}

export default GuestsGrid;