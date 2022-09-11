import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
  const renderContactList = props.contacts.map((item) => {
    return <ContactCard contact={item} />;
  });

  return <div>{renderContactList}</div>;
};
export default ContactList;
