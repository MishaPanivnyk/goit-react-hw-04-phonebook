import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';

import { Container, Title, SubTitle, Message } from 'components/App.styled';
export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const formSubmitHandler = (name, number) => {
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([
          ...contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ]);
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const contactsFiltered = [];
  contacts.forEach(contact => {
    contact.name.toLowerCase().includes(filter.toLowerCase()) &&
      contactsFiltered.push(contact);
  });

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm formSubmitHandler={formSubmitHandler} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={handleChange} />
      {contacts.length === 0 && <Message>There is not any contacts</Message>}
      <ContactList contacts={contactsFiltered} handleDelete={handleDelete} />
    </Container>
  );
}
