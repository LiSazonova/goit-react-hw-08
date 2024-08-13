import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p className={s.description}>Enter your email and password to sign in</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
