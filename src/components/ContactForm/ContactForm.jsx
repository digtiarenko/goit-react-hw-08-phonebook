import React, { useRef } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contacts/contactsSlice';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ContactForm() {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const nameInput = useRef(null);
  const numberInput = useRef(null);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const number = data.get('number');

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already here`);
      return;
    }
    nameInput.current.value = '';
    numberInput.current.value = '';
    const newContact = {
      name,
      number,
    };

    await addContact(newContact);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        inputProps={{ pattern: '[a-z]' }}
        required
        autoFocus
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        inputRef={nameInput}
      />
      <TextField
        required
        id="number"
        name="number"
        label="Number"
        variant="outlined"
        inputRef={numberInput}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ my: 2, color: 'white', display: 'block' }}
        disabled={isLoading}
      >
        Add new contact
      </Button>
    </Box>
  );
}
