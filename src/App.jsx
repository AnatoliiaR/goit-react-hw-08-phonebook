// import style from './App.module.css';
// import { useEffect } from 'react';
// import Form from './components/Form';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './redux/filter/filter-slice';
// import {
//   getAllContacts,
//   getFilteredContacts,
// } from './redux/contacts/contacts-selectors';
// import { getFilter } from './redux/filter/filter-selectors';

// import {
//   fetchAllContacts,
//   fetchAddContact,
//   fetchDeleteContact,
// } from 'redux/contacts/contacts-operations';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import NavBar from 'components/NavBar/NavBar';
import UserRoutes from 'UserRoutes';

import store, { persistor } from './redux/store';

export default function App() {
  // const contacts = useSelector(getAllContacts);
  // const visibleContacts = useSelector(getFilteredContacts);
  // const filter = useSelector(getFilter);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllContacts());
  // }, [dispatch]);

  // const onAddContact = ({ name, number }) => {
  //   dispatch(fetchAddContact({ name, number }));
  // };

  // const onDeleteContact = id => {
  //   dispatch(fetchDeleteContact(id));
  // };

  // const onChangeFilter = ({ currentTarget }) => {
  //   dispatch(setFilter(currentTarget.value));
  // };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-06-phonebook">
          <NavBar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    // <div className={style.App}>
    //   <h1 className={style.title}>
    //     React homework "Phonebook" by Anatoliia Riabchenko
    //   </h1>
    //   <div className={style.section}>
    //     <h2 className={style.subtitle}>Phonebook</h2>
    //     <Form onSubmit={onAddContact} contacts={contacts} />

    //     <h2 className={style.subtitle}>Contacts</h2>
    //     <Filter value={filter} onChange={onChangeFilter} />
    //     <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
    //   </div>
    // </div>
  );
}
