import PropTypes from 'prop-types';

import Contact from 'components/ContactList/Contact/Contact';
import { ContactsList } from 'components/ContactList/ContactsList.styled';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ContactsList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleDelete: PropTypes.func,
};
