import {useState} from 'react';
import {postGuest} from './GuestService';

const GuestsForm = ({addGuest}) => {
  
  const [formData, setFormData] = useState({})

  const onChange = (event) => {
    formData[event.target.id] = event.target.value;
    setFormData(formData);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    postGuest(formData)
      .then(() => {
        addGuest(formData);
      })
  }

  return (
    <form onSubmit={onSubmit} id="guests-form">
      <div className="input">
        <label htmlFor="name">Name: </label>
        <input onChange={onChange} type="text" id="name"/>
      </div>
      <div className="input">
        <label htmlFor="email">Email: </label>
        <input onChange={onChange} type="text" id="email"/>
      </div>
      <div className="input">
        <label htmlFor="status">Checked in? </label>
        <input onChange={onChange} type="radio" id="status" name="status" value="true"/>
        <label htmlFor="yes">Yes</label>
        <input onChange={onChange} type="radio" id="status" name="status" value="false"/>
        <label htmlFor="no">No</label>
      </div>
      <input type="submit" value="Save" id="save"/>
    </form>
  )
}

export default GuestsForm;