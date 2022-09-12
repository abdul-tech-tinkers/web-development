import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contacts";

function App() {
  //const CONTACT_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContact = async (contact) => {
    const uniqueId = uuidv4();
    const newContact = { id: uniqueId, ...contact };
    const response = await api.post("/contacts", newContact);
    setContacts([...contacts, response.data]);
  };

  const retContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    //localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  const onDeleteHandler = async (id) => {
    console.log(`id to be delted is in app.js ${id}`);
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    console.log(`deleted ${id}`);
  };

  return (
    <div className="flex flex-col ml-[10%] mr-[10%] w-[80%]">
      <Header></Header>
      <AddContact addContact={addContact} />
      <ContactList getContactId={onDeleteHandler} contacts={contacts} />
    </div>
  );
}

export default App;
