import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactList/Contact/Contact.styled';

export const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <ContactListItem>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </ContactListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
