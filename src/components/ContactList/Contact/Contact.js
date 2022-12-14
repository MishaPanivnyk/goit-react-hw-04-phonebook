import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactList/Contact/Contact.styled';

export default function Contact({
  contact: { id, name, number },
  handleDelete,
}) {
  return (
    <ContactListItem>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </ContactListItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
};
