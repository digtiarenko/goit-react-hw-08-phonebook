import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from '@mui/material';

function ContactsPage() {
  return (
    <Box>
      <Filter />
      <ContactList />
    </Box>
  );
}

export default ContactsPage;
