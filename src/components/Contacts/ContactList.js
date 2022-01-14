import ContactItem from "./ContatctItem";
import PropTypes from "prop-types";
import { ContactListStyled } from "./ContactList.styled";
function ContactList({ contacts, toDeleteContact }) {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          toDeleteContact={toDeleteContact}
        />
      ))}
    </ContactListStyled>
  );
}

export default ContactList;
