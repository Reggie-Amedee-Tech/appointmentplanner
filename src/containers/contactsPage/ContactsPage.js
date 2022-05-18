import React, { useEffect, useState } from "react";
import TileList from "../../components/tileList/TileList";
import ContactForm from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {

  const { contacts, addContact } = props;
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [duplicate, setDuplicate] = useState(false)


  const contactName = contacts.map((item) => item.name)

  const names = contactName.some(item => item === name)

  console.log(contactName)
  console.log(names)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (names) {
      return
    }
    addContact(name, email, phone);
    setName('');
    setEmail('');
    setPhone('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>

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
