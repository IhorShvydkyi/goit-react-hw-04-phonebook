import { useState, useEffect } from "react";
import { Container } from "./App.styled";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/Contacts/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitContactForm = (data) => {
    if (contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      setContacts((prevContacts) => [data, ...prevContacts]);
    }
  };

  const handleContactsFilter = (e) => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterNormalize);
    });
  };

  const toDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmitContactForm} />
      <h2>Contacts</h2>
      <Filter onChange={handleContactsFilter} value={filter} />
      {getVisibleContacts().length === 0 && filter.length > 0 ? (
        <p>No results for your search</p>
      ) : (
        <ContactList
          contacts={getVisibleContacts()}
          toDeleteContact={toDeleteContact}
        />
      )}
    </Container>
  );
}
