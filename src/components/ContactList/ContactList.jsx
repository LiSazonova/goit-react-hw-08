import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className={s.contacts_list}>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <h1>No contacts received!</h1>
      )}
    </ul>
  );
};

export default ContactList;
