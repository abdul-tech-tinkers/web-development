import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const CONTACT_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    const uniqueId = uuidv4();
    console.log(uniqueId);
    const newContact = { id: uniqueId, ...contact };
    console.log(newContact);
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const retContacts = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY));
    if (retContacts) setContacts(retContacts);
  }, []);

  return (
    <div className="flex flex-col ml-[10%] mr-[10%] w-[80%]">
      <Header></Header>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
