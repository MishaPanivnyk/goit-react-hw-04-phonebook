import PropTypes from 'prop-types';

import { Contact } from 'components/ContactList/Contact/Contact';
import { ContactsList } from 'components/ContactList/ContactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func,
};
