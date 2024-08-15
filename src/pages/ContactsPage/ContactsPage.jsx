import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}> Contact book </h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Request in progress...</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
