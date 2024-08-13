import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        Welcome to your Phone Book{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
