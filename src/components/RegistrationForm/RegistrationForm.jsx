import { useDispatch, useSelector } from 'react-redux';
import s from './RegistrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  const initialValues = { name: '', email: '', password: '' };

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

// import s from './ContactForm.module.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';
// import { addContact } from '../../redux/contactsOps';

// const ContactForm = () => {
//   const dispatch = useDispatch();

//   const initialValues = {
//     name: '',
//     number: '',
//   };

//   const ContactFormSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(3, 'Too Short! Please type min 3 symbols')
//       .max(50, 'Too Long! Must be up to 50 symbols')
//       .required('Required'),
//     number: Yup.string()
//       .min(3, 'Must be a valid phone number, min 3 symbols!')
//       .max(50, 'Too Long!')
//       .matches(/^\+?[1-9]\d{1,14}$/, 'Невірний формат номеру телефона')
//       .required('Required'),
//   });

//   const nameFieldId = nanoid();
//   const phoneFieldId = nanoid();

//   const handleSubmit = (values, actions) => {
//     dispatch(
//       addContact({
//         id: nanoid(),
//         name: values.name,
//         number: values.number,
//       }),
//     );
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={ContactFormSchema}
//     >
//       <Form className={s.form}>
//         <label className={s.input_title} htmlFor={nameFieldId}>
//           Name
//         </label>
//         <Field className={s.field} type="text" name="name" />
//         <ErrorMessage className={s.input_error} name="name" component="span" />
//         <label className={s.input_title} htmlFor={phoneFieldId}>
//           Number
//         </label>
//         <Field className={s.field} type="tel" name="number" />
//         <ErrorMessage
//           className={s.input_error}
//           name="number"
//           component="span"
//         />
//         <button className={s.btn} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
