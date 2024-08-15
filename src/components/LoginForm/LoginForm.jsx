import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <Form className={s.form}>
          <label className={s.input_title}>Email</label>
          <Field className={s.label} name="email" required />
          <label className={s.input_title}>Password</label>
          <Field className={s.label} name="password" type="password" required />
          <button className={s.btn} type="submit">
            Sign in
          </button>
          <span className={s.text}>
            Don't have an account?{' '}
            <Link className={s.link} to="/register">
              Sign up
            </Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
