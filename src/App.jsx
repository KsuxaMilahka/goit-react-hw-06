import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  selectContacts,
} from './redux/contactsSlise/contactsSlice';
import {
  selectNameFilter,
  changeFilter,
} from './redux/filtersSlise/filtersSlise';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );

  const onAddContact = contact => {
    dispatch(addContact(contact));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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
