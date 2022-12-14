import PropTypes from 'prop-types';
import { useState } from 'react';
// import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Form } from 'components/ContactForm/ContactForm.styled';

export default function ContactForm({ formSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // nameInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler(name, number);
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div>
        <label>Number</label>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
