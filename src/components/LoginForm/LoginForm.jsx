import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

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
