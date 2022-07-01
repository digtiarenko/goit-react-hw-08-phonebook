import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import ContactItem from '../ContactItem';
import { useGetContactsQuery } from '../../redux/contacts/contactsSlice';

import * as React from 'react';

import List from '@mui/material/List';
import Box from '@mui/material/Box';

function ContactList() {
  const filterValue = useSelector(state => state.filter);
  const { data: contacts, isLoading } = useGetContactsQuery();

  const getFilteredContacts = useMemo(
    () =>
      contacts?.filter(
        contact =>
          contact.name
            .toLowerCase()
            .includes(filterValue.trim().toLowerCase()) ?? [],
      ),
    [contacts, filterValue],
  );

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {isLoading && (
        <RotatingSquare
          ariaLabel="rotating-square"
          visible={true}
          color="grey"
        />
      )}
      {contacts && (
        <List>
          {getFilteredContacts.map(({ number, name, id }) => (
            <ContactItem phone={number} name={name} key={id} id={id} />
          ))}
        </List>
      )}
    </Box>
  );
}

export default ContactList;

//  {/* {contacts && (
//     <ul>
//       {getFilteredContacts.map(({ number, name, id }) => (
//         <ContactItem phone={number} name={name} key={id} id={id} />
//       ))}{' '}
//     </ul>
//   )} */}
// // </>
