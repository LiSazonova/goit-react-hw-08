import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  const initialValues = { name: '', email: '', password: '' };

  const RegistrationFormSchema = Yup.object({
    email: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    password: Yup.string()
      .required('This field is required!')
      .min(8, 'Too short!')
      .max(50, 'Too long!'),
  });

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        autoComplete="off"
        validationSchema={RegistrationFormSchema}
      >
        <Form className={s.form}>
          <h3 className={s.title}>Register</h3>
          <label className={s.input_title}>Username</label>
          <Field className={s.label} name="name" required />
          <label className={s.input_title}>Email</label>
          <Field className={s.label} name="email" required />
          <label className={s.input_title}>Password</label>
          <Field className={s.label} name="password" type="password" required />
          <button className={s.btn} type="submit">
            Sign up
          </button>
          <span className={s.text}>
            Already have an account?{' '}
            <Link className={s.link} to="/login">
              Sign in
            </Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
