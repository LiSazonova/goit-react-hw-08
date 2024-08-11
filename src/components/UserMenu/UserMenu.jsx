import s from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};
