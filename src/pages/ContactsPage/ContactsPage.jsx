// import { Modal } from 'components/Modal';
import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

function ContactsPage() {
  return (
    <div>
      {/* <Modal></Modal> */}
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
