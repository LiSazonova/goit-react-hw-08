import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome!</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
