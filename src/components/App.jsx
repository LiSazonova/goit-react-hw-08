import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './ResctrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && !loading && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
