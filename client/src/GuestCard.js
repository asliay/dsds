import {deleteGuest} from "./GuestService"

const GuestCard = ({guest, removeGuest}) => {
  

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
        <>
          <p>Checked In ❌</p>
          <button>Check In</button>
        </>
      )}
  }

  const handleDelete = () => {
    deleteGuest(guest._id)
      .then(() => {
        removeGuest(guest._id);
      })
  }

  return (
    <>
      <h3>Guest Name: {guest.name}</h3>
      <p>Email: {guest.email}</p>
      {statusDisplay()}
      <button onClick={handleDelete}>🗑</button>
      <hr/>
    </>
  )
}

export default GuestCard;