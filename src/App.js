import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [currentName, setCurrentName] = useState('')
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const onSubmitContact = (e) => {
    e.preventDefault();

    const contactName = contacts.map((item) => item.currentName)

    const names = contactName.some(name => name === currentName)
    
    if (names) {
      return
    }
    setContacts((item) => [...item, {
      currentName: currentName,
      email: email,
      phone: phone
    }]
    )
    setCurrentName('')
  }

  const onChangeHandlerForCurrentName = (e) => {
    setCurrentName(e.target.value)
  }

  const onChangeHandlerForEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangeHandlerForPhone = (e) => {
    setPhone(e.target.value)
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} onSubmitContact={onSubmitContact} setCurrentName={setCurrentName} onChangeHandlerForCurrentName={onChangeHandlerForCurrentName} onChangeHandlerForEmail={onChangeHandlerForEmail} onChangeHandlerForPhone={onChangeHandlerForPhone} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
