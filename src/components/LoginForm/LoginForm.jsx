import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <Form className={s.form}>
          <label className={s.input_title}>Email</label>
          <Field className={s.label} name="email" required />
          <label className={s.input_title}>Password</label>
          <Field className={s.label} name="password" required />
          <button className={s.btn} type="submit">
            Sign in
          </button>
          <span className={s.text}>
            Already have an account?{' '}
            <NavLink className={s.link} to="/register">
              Sign in
            </NavLink>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
