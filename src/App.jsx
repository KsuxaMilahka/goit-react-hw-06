import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || initialContacts;
  });
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );

  // const handleClick = contactName => {
  //   console.log('name: ', contactName);
  // };

  const onAddContact = contact => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts([finalContact, ...contacts]);
  };

  const onDeleteContact = contactId => {
    setContacts(contacts.filter(item => item.id !== contactId));
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox
        filterValue={filterValue}
        onFilterChange={handleFilterChange}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
