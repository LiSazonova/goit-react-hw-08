import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};
