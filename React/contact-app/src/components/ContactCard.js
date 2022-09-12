import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
  let contact = props.contact;
  return (
    <div className="flex flex-row justify-start items-center  p-4 bg-yellow-100 my-1">
      <img alt="user" className="w-20 h-20 mr-5 rounded-full" src={user} />
      <div>
        <p className="font-bold first-letter:uppercase">{contact.name}</p>
        <p>{contact.email}</p>
        <p className="number">{contact.contact}</p>
      </div>
      <i
        onClick={() => props.clickHandler(contact.id)}
        className="bi bi-trash mr-4 text-red-500 justify-self-end "
      ></i>
    </div>
  );
};
export default ContactCard;
