import s from './Contact.module.css';
import { BsTelephone } from 'react-icons/bs';
import { SlUser } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
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
      </li>
    </>
  );
};

export default Contact;
