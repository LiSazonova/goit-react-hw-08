import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const ContactFormSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    number: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
  });

  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      }),
    )
      .then(() => {
        toast.success('Contact added successfully!');
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact. Please try again.');
      });
  };

  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={s.form}>
          <label className={s.input_title} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={s.label} type="text" name="name" />
          <ErrorMessage
            className={s.input_error}
            name="name"
            component="span"
          />
          <label className={s.input_title} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field className={s.label} type="tel" name="number" />
          <ErrorMessage
            className={s.input_error}
            name="number"
            component="span"
          />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
