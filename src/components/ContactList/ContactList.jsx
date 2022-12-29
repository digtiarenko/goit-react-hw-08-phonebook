import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
// import { RotatingSquare } from 'react-loader-spinner';
import ContactItem from '../ContactItem';
import { useGetContactsQuery } from '../../redux/contacts/contactsSlice';
import { List, Box, Fab, Backdrop, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddContactModal from 'components/addContactModal/AddContactModal';

function ContactList() {
  const filterValue = useSelector(state => state.filter);
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

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
    <Box>
      {isLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: 10 }} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <AddContactModal open={open} handleClose={closeModal} />
      {contacts && (
        <Box className="box">
          <Fab
            onClick={() => setOpen(true)}
            component="button"
            variant="extended"
            sx={{
              position: 'fixed',
              left: '42%',
              bottom: '100px',
            }}
            color="primary"
            aria-label="add"
          >
            <AddIcon sx={{ mr: 1 }} />
            Add contact
          </Fab>
          <List sx={{ bgcolor: 'background.paper' }}>
            {getFilteredContacts.map(({ phone, name, _id, email }) => (
              <ContactItem
                phone={phone}
                name={name}
                email={email}
                key={_id}
                id={_id}
              />
            ))}
          </List>
        </Box>
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
