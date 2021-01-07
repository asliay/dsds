
const GuestCard = ({guest}) => {
  

  const statusDisplay = () => {
    if (guest.status) {
    return (
      <>
        <p>Checked In ✅</p>
        <button>Check Out</button>
      </>
    )}
    else {
      return (
        <button>Check In</button>
      )}
  }

  return (
    <>
      <h3>Guest Name: {guest.name}</h3>
      <p>Email: {guest.email}</p>
      {statusDisplay()}
      <hr/>
    </>
  )
}

export default GuestCard;