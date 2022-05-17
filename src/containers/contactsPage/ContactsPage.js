import React, {useEffect} from "react";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const { onSubmitContact, contacts, setCurrentName, onChangeHandlerForCurrentName, onChangeHandlerForEmail, onChangeHandlerForPhone } = props;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <form onSubmit={onSubmitContact}>
          <input
          type='text'
          value={contacts.currentName}
          onChange={onChangeHandlerForCurrentName}
          placeholder="please input your name"
          >
          </input>
          <input
          type='text'
          value={contacts.email}
          onChange={onChangeHandlerForEmail}
          placeholder="please input your email"
          >
          </input>
          <input
          type='text'
          value={contacts.phone}
          onChange={onChangeHandlerForPhone}
          placeholder="please input your phone number"
          >
          </input>
          <button type="submit">Submit</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
        
      </section>
    </div>
  );
};

/* {contacts.map((item, idx) => {
          return <div key={idx}>
            <p>{item.currentName}</p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
            </div>
        })}

        */
