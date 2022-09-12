import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const renderContactList = props.contacts.map((item) => {
    return (
      <ContactCard
        key={item.id}
        clickHandler={() => props.getContactId(item.id)}
        contact={item}
      />
    );
  });

  return <div>{renderContactList}</div>;
};
export default ContactList;
