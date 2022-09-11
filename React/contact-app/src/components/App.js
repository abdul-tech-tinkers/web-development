import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="flex flex-col ml-[10%] mr-[10%] w-[80%]">
      <Header></Header>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
