import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}!</p>
      <button className={s.btn} type="button">
        Log out
      </button>
    </div>
  );
};
