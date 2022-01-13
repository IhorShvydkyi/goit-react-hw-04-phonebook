import { useState } from "react";
import { Container } from "./App.styled";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/Contacts/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  const onSubmitContactForm = (data) => {
    if (contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      setContacts((prevContacts) => [data, ...prevContacts]);
    }
  };

  // handleContactsFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const filterNormalize = filter.toLowerCase();
  //   return contacts.filter((contact) => {
  //     return contact.name.toLowerCase().includes(filterNormalize);
  //   });
  // };

  // onDeleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => {
  //       return contact.id !== contactId;
  //     }),
  //   }));
  // };

  // const { filter } = this.state;
  // const visibleContacts = this.getVisibleContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmitContactForm} />
      {/* <h2>Contacts</h2>
			<Filter onChange={this.handleContactsFilter} value={filter} />
			{visibleContacts.length === 0 && filter.length > 0 ? (
				<p>No results for your search</p>
			) : (
				<ContactList
					contacts={visibleContacts}
					onDeleteContact={this.onDeleteContact}
				/>
			)} */}
    </Container>
  );
}
