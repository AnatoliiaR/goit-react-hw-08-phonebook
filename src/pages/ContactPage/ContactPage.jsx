import style from './ContactPage.module.css';
import { useEffect } from 'react';
import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import {
  getAllContacts,
  getFilteredContacts,
} from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../redux/contacts/contacts-operations';

export default function App() {
  const contacts = useSelector(getAllContacts);
  const visibleContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const onChangeFilter = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <div className={style.App}>
      <h1 className={style.title}>
        React homework "Phonebook" by Anatoliia Riabchenko
      </h1>
      <div className={style.section}>
        <h2 className={style.subtitle}>Phonebook</h2>
        <Form onSubmit={onAddContact} contacts={contacts} />

        <h2 className={style.subtitle}>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
      </div>
    </div>
  );
}
