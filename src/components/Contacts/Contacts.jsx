import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import React from 'react';

function Contacts() {
  return (
    <>
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default Contacts;
