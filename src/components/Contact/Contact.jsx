import s from './Contact.module.css';
import { BsTelephone } from 'react-icons/bs';
import { SlUser } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { toast, Toaster } from 'react-hot-toast';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id));
      toast.success(`Contact ${name} deleted successfully!`);
    } catch (e) {
      console.log(e.message);
      toast.error('Failed to delete contact. Please try again.');
    }
  };

  return (
    <>
      <li className={s.contact_card}>
        <div className={s.contact_context}>
          <p className={s.contact_text}>
            <SlUser className={s.icons} />
            {name}
          </p>
          <p className={s.contact_text}>
            <BsTelephone className={s.icons} />
            {number}
          </p>
        </div>
        <button className={s.btn} onClick={handleDelete}>
          Delete
        </button>
        <Toaster position="top-right" />
      </li>
    </>
  );
};

export default Contact;
